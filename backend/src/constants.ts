// const fs = require("fs");

const isProd = true; // prod or preprod
const isAppEngine = false; // local or AppEngine on Google Cloud

const DB_CONFIG = {
  dateStrings: !isAppEngine,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: isProd ? process.env.DB_BASE : process.env.DB_BASE_PREPROD,
  connectTimeout: 100000,
  socketPath: isAppEngine && process.env.DB_SOCKET_PATH,
  host: !isAppEngine && process.env.DB_HOST,
};

module.exports = {
  isProd,
  isAppEngine,
  DB_CONFIG,
};
