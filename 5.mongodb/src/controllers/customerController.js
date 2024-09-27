const Joi = require("joi"); // thư viện để validate dữ liệu

const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomersService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customerService");

//  viết theo chuẩn 1 object {key:value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body; // destructuring object js
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(), // .alphanum()

      // address: Joi.string(),

      // phone: Joi.string().pattern(new RegExp("^[0-9]{8,12}$")), // nhập số từ 0-9, từ 8-12 ký tự

      // email: Joi.string().email({
      //   minDomainSegments: 2,
      //   tlds: { allow: ["com", "net"] },
      // }),
      // description: Joi.string(),
    });
    // truyền req.body vào để validate
    const { error } = schema.validate(req.body, { abortEarly: false }); // flase để hiển thị tất cả lỗi
    if (error) {
      return res.status(200).json({
        message: error,
      });
    } else {
      //     joi ném hoặc trả về ValidationErrorcác đối tượng có chứa:

      // name- 'ValidationError'.
      // isJoi- true.
      // details- một mảng lỗi:
      // message- chuỗi mô tả lỗi.
      // path- mảng có thứ tự trong đó mỗi phần tử là phần tử truy cập vào giá trị xảy ra lỗi.
      // type- loại lỗi.
      // context- đối tượng cung cấp bối cảnh của lỗi bao gồm:
      // key- khóa của giá trị bị lỗi, tương đương với phần tử cuối cùng của details.path.
      // label- nhãn của giá trị bị lỗi, hoặc keynếu có, hoặc giá trị mặc định messages.root.
      // value- giá trị không được xác thực.
      // các thuộc tính lỗi cụ thể khác được mô tả cho từng mã lỗi.
      // annotate()- hàm trả về một chuỗi có phiên bản chú thích của đối tượng trỏ đến những nơi xảy ra lỗi. Lấy một tham số tùy chọn, nếu đúng, sẽ loại bỏ màu khỏi đầu ra.

      let imageUrl = "";

      if (!req.files || Object.keys(req.files).length === 0) {
        // do nothing
      } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
        console.log("check path result: ", result.path);
      }

      let customerData = {
        name,
        address,
        phone,
        email,
        image: imageUrl,
        description,
      };

      let customer = await createCustomerService(customerData);
      // để biến thành 1 API
      return res.status(200).json({
        errorCode: 0,
        data: customer,
      });
    }
  },
  postCreateArrayCustomer: async (req, res) => {
    console.log("check req.body: ", req.body);

    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },
  getAllCustomers: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;

    let name = req.query.name;
    let result = null;
    if (limit && page) {
      result = await getAllCustomersService(limit, page, name, req.query);
    } else result = await getAllCustomersService();

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
  },
  putUpdateCustomers: async (req, res) => {
    let { id, name, email, address } = req.body;
    let result = await putUpdateCustomersService(id, name, email, address);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customersId;
    console.log("check ids: ", ids);

    let result = await deleteArrayCustomerService(ids);
    console.log("check result: ", result);
    if (result) {
      res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } else {
      res.status(200).json({
        errorCode: -1,
        data: result,
      });
    }
  },
};
