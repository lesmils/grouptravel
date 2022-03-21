const express = require("express");
const corsMiddleWare = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const tripRouter = require("./routers/trips");
const userRouter = require("./routers/users");
const commentRouter = require("./routers/comments");
const { Server } = require("socket.io");
const cors = require("cors");
const http = require("http");
const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use("/auth", authRouter);
app.use("/trips", tripRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

//socket.io
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

//testroute
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;

  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Express listening on port: ${PORT}`);
});

server.listen(4001, () => {
  console.log("Socket on PORT 4001");
});
