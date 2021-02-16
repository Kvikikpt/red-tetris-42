const express = require('express');
const cors = require('cors')

const port: number = 3000;

const app = express();
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use(cors())

// @ts-ignore
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.get('/', (req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

const getApiAndEmit = (socket: any) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

// @ts-ignore
io.on("connection", (socket: any) => {
  console.log("New client connected");
  let interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
