import { Socket } from "net";

var net = require("net");

var socket: Socket = net.connect({ port: 5000 });
socket.on("connect", () => {
  console.log("connected to server!");
  setInterval(() => {
    socket.write("banana hong");
  }, 1000);
});

socket.on("data", (chunk: Buffer) => console.log("res: " + chunk));
socket.on("end", () => console.log("disconnect"));
socket.on("error", (err: Error) => console.log(err));
socket.on("timeout", (err: Error) => console.log("timeout"));
