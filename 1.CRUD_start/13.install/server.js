// câu lệnh npm init 
// giúp tạo ra file package.json  và các thông tin cần thiết khác  như : app name,version,description,entry point, test command, git repository, keywords, author, license,..
// phải có file package.json mới cài được thu viện khác


// 2. cài đăt thư viên
// npm install <tên thư viện>
// npm install <tên thư viện>@<version>
//  cài express npm install i --save-exact express@4.18.2
//=======================================================================================================npm

const { createServer } = require("node:http");

const hostname = "127.0.0.1"; // là localhost
// const hostname ="localhost"
const port = 3000; // 0 - 65535 ( loiaj 1 số port phổ biến như 23, 80, 443)

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hiếu võ dz okeee okedoad");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
