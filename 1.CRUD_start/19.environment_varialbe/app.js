// #18. Template (View) Engine
// template: tức là bộ khung định hình sẵn
// ví dụ template wedding chẳng hạn, người bán hàng đưa sẵn template, bạn chỉ cần chọn và
// fill tên vào thôi :v
// https://expressjs.com/en/guide/using-template-engines.html
// 1. Template Engine
// Template Engine (View engine) giúp chúng ta có thể tạo 'static template files'.
// At runtime. template engine sẽ biến đổi file view thành HTML để gửi cho client.
// Express hỗ trợ các template engines nổi tiếng như : Pug, Mustache, EJS, Jade, Handlebars...

console.log("Hello World!");

// 2. So sánh các loại template engine
// List danh sách hỗ trợ: https://expressjs.com/en/resources/template-engines.html
// So sánh nhanh: https://strongloop.com/strongblog/compare-javascript-templates-jademustache-dust/
// Lựa chọn EJS vì:
// - Nếu bạn đã dùng .JSP (Java) hoặc .Blade (Laravel/PHP) thì syntax nó giống hệt :v
// - Nhiều bạn sẽ bảo rằng, ngoài lý do trên, thì tại sao lại không chọn cái khác. Lý do vì:
// Nếu để thiết kế 1 giao diện đẹp, ít code, dễ maintain thì không dùng node.js để render giao
// diện.
// => học React :v (1 công cụ chuyên về Frontend)

// 3. Cấu hình EJS cho project
// Tài liệu:
// https://github.com/mde/ejs
// https://ejs.co/
// - Cài đặt EJS
// https://www.npmjs.com/package/ejs
console.log("npm install --save-exact ejs@3.1.8");

// Khóa Học Backend Node.JS (RESTful APIs) From Zero - Youtube Channel ‘Hỏi Dân IT’
// 37
// https://expressjs.com/en/4x/api.html#app.set
// views, the directory where the template files are located.
// Eg: app.set('views', './views'). This defaults to the views directory in the application root
// directory.
// view engine, the template engine to use. For example,
// to use the EJS template engine:
// app.set('view engine', 'ejs').
// => https://expressjs.com/en/4x/api.html#app.renderKhóa Học Backend Node.JS (RESTful APIs) From Zero - Youtube Channel ‘Hỏi Dân IT’
// 38

// Chapter 3: Project Structure
// Một dự án Backend chuyên nghiệp, sẽ không thể thiếu cách tổ chức hệ thống code
// (structure). Ngoài ra, khi làm website, chúng ta sẽ không thể không biết đến mô hình MVC
// (Model - View - Controller).
