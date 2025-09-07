const http = require("http");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
// Use Heroku's provided port or default to 3000 for local development
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0"; // Use 0.0.0.0 for Heroku compatibility

http
  .createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html");
    if (req.url !== "/") {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  });
