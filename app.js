const http = require("http");
const url = require("url");
// console.log(http);

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url);
  console.log(parsedURL);
  console.log(parsedURL.pathname);
  //   console.log(req.url);
  res.write("Hello, " + parsedURL.pathname);
  res.end();
});
// console.log(server);

server.listen(3501, () => {
  console.log("Server is running on port 3501.");
});
