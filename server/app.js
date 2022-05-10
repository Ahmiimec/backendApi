import express, { json, urlencoded } from 'express';
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes"
import testController from "./controllers/tests.controller"

const db = require("./models/index");

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/test", testController.getAll);

db.sequelize.sync({force:true})

export default app;
