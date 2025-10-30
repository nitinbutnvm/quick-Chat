import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js"
import userRouter from "./routes/userRoutes.js"
import messageRouter from "./routes/messageRoutes.js"
import {server} from "socket.io"

const app = express()
const server = http.createServer(app)

// Socket.io setup
export const io = new server.Server(server, {
    cors:{origin: "*"} 
})

// store online users
export const userSocketMap =  {}

// socket conn handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query;
    console.log("User Connected", userId );

    if(userId) userSocketMap[userId] = socket.id;

    // emit online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("User Disconnected", userId);
        delete userSocketMap[userId];
        to.emit("getOnlineUsers", Object.keys(userSocketMap))
    });

})

// middleware
app.use(cors())
app.use(express.json({limit:"4mb"})) 

// Routes
app.use("api/status", (req, res)=>res.send("Server is running"))
app.use("/api/auth", userRouter)
app.use("/api/messages", messageRouter)

await connectDB();

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is running  ${PORT}`)
})