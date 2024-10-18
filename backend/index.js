import express from "express";
import { PORT, mongoURI } from "./config.js"
import mongoose from "mongoose";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);
app.get("/", (req, res) => {
    res.send("Employee API"); 
})

export default app

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err);
    })