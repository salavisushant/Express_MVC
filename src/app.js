const express = require("express"); 

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");
const studetController = require("./controller/student.controller");
const evaluationController = require("./controller/evaluation.controller");

app.use("/user", userController)
app.use("/student", studetController)
app.use("/evaluation", evaluationController)


module.exports = app;

