import express from "express";
import connectDB from "./db.js";
import router from "./Routes/taskRoutes.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use("/tasks", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
