import express = require("express");
import cors = require("cors");
// import bodyParser = require("body-parser");
import routes from "./controllers";

const app = express();

app.use(cors());
// app.use(bodyParser);

app.use("/", routes);

export default app;
