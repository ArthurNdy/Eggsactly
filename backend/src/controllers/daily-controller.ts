// const { customer_notifications_endpoint } = require('../../../services/internal/endpoints');
// const { customer_notifications_treatment } = require('../../../services/internal/treatments');
import get_daily from "../db/requests/daily";

async function daily_controller(_, res) {
  try {
    const data = await get_daily();
    res.send(data[0]);
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(`(daily_controller) Error: ${err}`);
    console.error(err);
  }
}

module.exports = daily_controller;
