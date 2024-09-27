const { Project } = require("../models/Project");
const aqp = require("api-query-params");
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
    } else if (data.type == "ADD-USER") {
      console.log("check data", data);
      let myProject = await Project.findById(data.projectId).exec();

      for (let i = 0; i < data.userArray.length; i++) {
        myProject.usersInfor.push(data.userArray[i]);
      }
      let newResult = await myProject.save();
      // find project  by id : phải thêm 1 user vào dự án mình đã tạo rồi mới được
      console.log("check my project", myProject);
      return newResult;
    } else if (data.type == "REMOVE-USERS") {
      // mình không thể data.
      let myProject = await Project.findById(data.projectId).exec();

      let userArr = data.userArr;
      for (let i = 0; i < userArr.length; i++) {
        myProject.usersInfor.pull(userArr[i]);
      }
      let result = await myProject.save(); // phải lưu nó mới cập nhật database của chúng ta
      return result;
    }

    // thêm task vào trong cái proejct
    else if (data.type == "ADD-TASKS") {
      console.log("check data", data);

      let myProject = await Project.findById(data.projectId).exec();
      console.log("check my project", myProject);
      for (let i = 0; i < data.taskArr.length; i++) {
        myProject.tasks.push(data.taskArr[i]);
      }
      let result = await myProject.save();

      return result;
    }
  } catch (error) {
    console.log("đang bị lỗi ............");
    console.log("check error: ", error);
    return null;
  }
};
const getProjectService = (queryString) => {
  let page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  console.log("trước khi xóa  filter. page: ", filter);
  delete filter.page;
  console.log("sau khi xóa  filter. page: ", filter); // là nó seX XÓA CÁI ĐIỀU KIỆN MÌNH TRUYỀN VÀO Ở BÊN POSTMAN

  //   Tuy nhiên, mặc định khi bạn chỉ đơn giản sử dụng aqp(queryString) như trong ví dụ của bạn, các tham số mặc định mà thư viện aqp sẽ cung cấp gồm:
  //  const { filter, skip, limit, sort, projection, population } = aqp(req.query);
  // filter: Điều kiện lọc dữ liệu, thường là các điều kiện để tìm kiếm hoặc lọc kết quả.
  // limit: Giới hạn số lượng kết quả cần trả về.
  // skip: Số lượng kết quả cần bỏ qua trước khi bắt đầu trả về dữ liệu (phân trang).
  // sort: Cách sắp xếp kết quả, theo thứ tự tăng dần hoặc giảm dần của một hoặc nhiều trường.
  // fields: Các trường được lựa chọn để trả về từ dữ liệu.
  let offset = (page - 1) * limit;
  return Project.find(filter)
    .populate(population) // để lấy thông tin của user kiểu như 1 nhiều với project thì mình lấy nó là cái mảng ở trong á
    // nếu không có thì nó sẽ trả về id của user đó
    .skip(offset)
    .limit(limit)
    .exec();
};
const deleteAProjectService = async (id) => {
  try {
    // let result = await Project.delete({ _id: id });
    let result = await Project.deleteById(id); // Phương thức này thực hiện soft delete chính xác

    return result;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
const putUpdateProjectsService = async (data) => {
  try {
    // return await Project.updateOne({_id:data.id},{data.name, data.startDate, data.endDate, data.description}); // như thế này thì ko được
    return await Project.updateOne(
      { _id: data.id },
      {
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      }
    );
  } catch (error) {
    console.log("check error ", error);
  }
};
module.exports = {
  postCreateProjectService,
  getProjectService,
  deleteAProjectService,
  putUpdateProjectsService,
};
