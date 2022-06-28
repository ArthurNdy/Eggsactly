import { Sequelize } from "sequelize";
// const Constants = require("./constants");

// const connect_info = Constants.DB_CONFIG;

//declare database credentials
const sequelize = new Sequelize("birdietest", "test-read", "xnxPp6QfZbCYkY8", {
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  dialect: "mysql",
});

// IIFE
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
