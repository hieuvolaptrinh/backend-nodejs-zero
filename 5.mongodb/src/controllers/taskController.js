const {
  getTasksService,
  putUpdateTasksService,
  postCreateTasksService,
  deleteTasksService,
} = require("../services/taskService.js");

const getTasks = async (req, res) => {
  let result = await getTasksService(req.query);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const postCreateTasks = async (req, res) => {
  let result = await postCreateTasksService(req.body);
  console.log("check result", result);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const putUpdateTasks = async (req, res) => {
  let result = await putUpdateTasksService(req.body);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const deleteTasks = async (req, res) => {
  let result = await deleteTasksService(req.body.id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
module.exports = { getTasks, putUpdateTasks, postCreateTasks, deleteTasks }; // export ra ngoài để sử dụng
