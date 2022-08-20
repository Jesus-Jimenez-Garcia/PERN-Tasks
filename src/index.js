import express from "express";
import morgan from "morgan";
import taskRouter from "./routes/tasks.routes.js";
import db from "./config.js"
import cors from 'cors'

const app = express();

app.use(cors())
app.use(morgan("dev"));
app._router.use(express.json());
app._router.use(express.text());

app.use(taskRouter);

app.use((err, req, res, next)=>{
    return res.status(500).json({
        message: err.message
    })
});

app.listen(db.port);
console.log(`Server on port ${db.port}`);
