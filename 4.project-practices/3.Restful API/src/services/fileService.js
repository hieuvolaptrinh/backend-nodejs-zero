const path = require("path");
const uploandSingle = async (fileObject) => {
  // const uploadPath = path.join(
  //   __dirname,
  //   "..",
  //   "public",
  //   "images",
  //   fileObject.name
  // );
  const uploadPath = path.resolve(__dirname, "../public/images/upload");

  // chế biến lại tên ảnh :>
  // get image extension
  let extName = path.extname(fileObject.name);
  // get image name
  let baseName = path.basename(fileObject.name);
  // create final path
  let finalName = `${baseName}-${Date.now()}${{ extName }}`;
  let finalPath = `${uploadPath}/${finalName}`;
  try {
    await fileObject.mv(finalPath);

    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (error) {
    console.log("check err ....: ", error);
    return {
      status: "fail     ",
      path: null,
      error: JSON.stringify(error),
    };
  }
};
const uploandMultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      console.log("check i = ", i);
      //get image extension
      let extName = path.extname(filesArr[i].name);

      //get image's name (without extension)
      let baseName = path.basename(filesArr[i].name, extName);

      //create final path: eg: /upload/your-image.png
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;

      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }

    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  uploandSingle,
  uploandMultipleFiles,
};
