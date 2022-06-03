const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200)
   res.write('Hello from my web server')
   res.end()
  } else if (req.url == "/SPRING.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("spring.html", function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write("Error: File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/WINTER.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("winter.html", function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write("Error: File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});
server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
