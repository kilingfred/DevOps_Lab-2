const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http
  .createServer((req, res) => {
    const filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );
    const extname = path.extname(filePath);
    let contentType = "text/html";
  })
  .listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  });
const PORT = 3000;
const HOSTNAME = "localhost";
