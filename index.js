import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";
import TodoRoutes from "./routes/todo.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = "mongodb://localhost:27017"
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("APP IS RUNNING");
});
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log("Server running on port 5000"))
    )
    .catch((error) => console.log(error.message));

app.use("/user", userRoutes);
app.use("/todo", TodoRoutes);