const http = require("http");
const url = require("url");

const port = 8000;

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const query = url.parse(req.url, true).query;

  if (pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (pathName === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});
