const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const HOSTNAME = "localhost";

http
  .createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html");
    if (req.url !== "/") {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  })
  .listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  });
