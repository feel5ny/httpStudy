import { Server, IncomingMessage, ServerResponse } from "http";
const http = require("http");
const url = require("url");

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    const parsedUrl = url.parse(req.url);
    console.log(req.url);
    res.end("Hello node.js!");
  }
);

server.listen(9000, () => {
  console.log("Server is running...");
});
