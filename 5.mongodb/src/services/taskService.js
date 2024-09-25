const Task = require("../models/task");
const aqp = require("api-query-params");
const getTasksService = async (queryString) => {
  let page = queryString.page;
  let { filter, limit, population } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit;
  let result = await Task.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};
const postCreateTasksService = async (data) => {
  

  if (data.type == "EMPTY-TASK") {
    let result = await Task.create({
      name: data.name,
      description: data.description,
      status: data.status,
      startDate: data.startDate,
      endDate: data.endDate,
    });
    return result;
  }
};
const putUpdateTasksService = async (data) => {
  let result = await Task.updateOne(
    { _id: data.id },
    {
      ...data,
    } // js destructuring object
  );
  return result;
};
const deleteTasksService = async (id) => {
  let result = await Task.deleteById(id);
  return result;
};
module.exports = {
  getTasksService,
  postCreateTasksService,
  putUpdateTasksService,
  deleteTasksService,
};
