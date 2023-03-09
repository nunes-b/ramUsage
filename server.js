const http = require("http");
const status = require("./pcRamusage");

const host = "http://localhost";
const port = 5000;

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === "/status") {
      res.end(JSON.stringify(status, null, 2));
    } else {
      res.end("<h1>Seja bem vindo | tente utilizar a rota /status</h1>");
    }
  })
  .listen(port, () => console.log(`Server is running in ${host}:${port}`));
