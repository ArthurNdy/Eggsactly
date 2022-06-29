import express = require("express");
import cors = require("cors");
import routes from "./controllers";

const app = express();

app.use(cors());

app.use("/", routes);

export default app;
