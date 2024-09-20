const Project = require("../models/Project");
const { postCreateProjectService } = require("../services/projectService.js");
const postCreateProject = async (req, res) => {

  let result = await postCreateProjectService(
    req.body
  );
  if (result) {
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } else {
    return res.status(200).json({
      errorCode: -1,
      data: result,
    });
  }
};
module.exports = { postCreateProject };
