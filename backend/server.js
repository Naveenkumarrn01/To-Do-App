const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
