import express from "express";
import course from "../src/controller/course.controller";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use("/course", course);

app.use((error, req, res, _next) => res.send(error.message));

export default app;
