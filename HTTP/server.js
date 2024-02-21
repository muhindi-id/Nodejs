const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const home = fs.readFileSync("./index.html", "utf8");
  if (req.url === "/") {
    res.write(home);
  }
  const signup = fs.readFileSync("./signup.html", "utf8");
  console.log(req.url)
  if (req.url === "/signup") {
    console.log('here')
    res.write(signup);
  }
  res.end();
});
server.listen(3080);
