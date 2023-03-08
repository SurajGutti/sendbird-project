
const express = require('express');
const bodyParser = require('body-parser')

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3001;

const httpServer = createServer(app);
const io = new Server(httpServer, {
 cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
let serverSocket = {socket: null };

io.on("connection", (socket) => {
    console.log('connected')
    serverSocket.socket = socket;
});

app.post('/webhooks/sendbird', async (req, res) => {
    await console.log('sendbird!!', req.body.payload);
    serverSocket.socket.emit("sendbirdEvent", req.body.payload);
    res.status(200);
});
  
httpServer.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);