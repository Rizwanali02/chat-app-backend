import express from "express"
import path from "path"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";
import cors from "cors"

const PORT = process.env.PORT || 8000;

// const __dirname = path.resolve()

dotenv.config();

app.use(cors({
    origin: ["*", "https://real-time-chat-app-six.vercel.app","http://localhost:3000"],
    methods: ["GET", "POST"]
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)
app.get("/", (req, res) => {
    res.send("Deployed successfully");
});


// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index,html"))
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})