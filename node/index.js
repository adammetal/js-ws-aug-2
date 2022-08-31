const http = require("http");
const fs = require("fs");

const stream = fs.createWriteStream("./log.txt", { flags: "a" });

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log(method, url);

  let body = "";
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    console.log(body);

    if (url.startsWith("/log") && method !== 'GET') {
      stream.write(`${method} ${url}`);
      if (body.length) {
        stream.write(` ${body.length}`);
      }
      stream.write("\n");
    }

    if (url.startsWith('/log') && method === 'GET') {
      fs.readFile('./log.txt', (err, buffer) => {
        res.statusCode = 200;
        res.end(buffer);
      });
      return;
    }

    res.statusCode = 200;
    res.end("OK");
  });
});

server.on("error", (err) => {
  throw err;
});

server.listen(8080);
