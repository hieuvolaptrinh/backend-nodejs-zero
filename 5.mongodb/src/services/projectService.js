const Project = require("../models/Project");

const postCreateProjectService = async (data) => {
  try {
    if (data.type == "EMPTY-PROJECT") {
      let result = await Project.create({
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
        customerInfor: data.customerInfor,
        usersInfor: data.usersInfor,
        leader: data.leader,
        tasks: data.tasks,
      });
      return result;
    }
    if (data.type == "ADD-USER") {
      console.log("check data", data);
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < myProject.usersInfor.length; i++) {
        myProject.usersInfor.push(data.userArray[i]);
      }
      let newResult = await myProject.save(); 
      // find project  by id : phải thêm 1 user vào dự án mình đã tạo rồi mới được
      console.log("check my project", myProject);
      return newResult;
    }
  } catch (error) {
    console.log("đang bị lỗi ............");
    console.log("check error: ", error);
    return null;
  }
};
module.exports = { postCreateProjectService };
