import { Socket, Server } from "net";

const http = require("http");
const net = require("net");
const url = require("url");

// 서버 객체를 생성한다.
var server: Server = net.createServer((socket: Socket) => {
  console.log(`${socket.address()} connected`);
  // client로부터 오는 data를 화면에 출력
  socket.on("data", data => console.log("res:" + data));
  socket.on("close", data => console.log("client disconnected."));
  socket.write("welcome to server");
});

server.on("error", (err: Error) => console.log("서버에러" + err));
server.listen(5000, () => console.log("5000 대기중..."));

/**
 * 
 const tcpServer = tcp.createServer()
 tcpServer.addListener('connection', (socket) => {
     socket.write('tcp')
 })
 const server = http.createServer((req, res) => {
     res.writeHead(200, {
         "Content-Type": 'text/html'
     });
     const parsedUrl = url.parse(req.url);
     console.log(parsedUrl);
     res.end("Hello node.js!");
 })
 
 // server.listen(9000, () => {
 //     console.log("Server is running...")
 // })
 tcpServer.listen(9000, () => {
     console.log("Server is running...")
 })
 */
