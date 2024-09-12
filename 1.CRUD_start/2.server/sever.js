const { createServer } = require("node:http");

const hostname = "127.0.0.1"; // là localhost
// const hostname ="localhost"
const port = 6969; // 0 - 65535 ( loiaj 1 số port phổ biến như 23, 80, 443)

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hiếu võ dz okeee okedoad");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//  khi chạy 2 sever cùng 1 port thì sẽ báo lỗi
//  phải kill port
//  npx kill-port PORT
