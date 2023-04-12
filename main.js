const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile("./welcome.txt", "utf-8", (err, data) => {
    return res.end("<h1>Hello Node!!!!</h1>" + "<h1>" + data + "</h1>");
  });
});
server.listen(3000);
