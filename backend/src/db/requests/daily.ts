import sequelize = require("../../config/db-setup");

// const data = await sequelize.query(
//   "SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '10/05/2019' AND care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND event_type != 'task_completed' ORDER BY TIMESTAMP(timestamp)"
// );
// console.log("(daily_controller) data", data[0]);
// res.send(data[0]);

async function get_daily() {
  const QUERY = `SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '10/05/2019' AND care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND event_type != 'task_completed' ORDER BY TIMESTAMP(timestamp)`;
  const res = await sequelize.query(QUERY);
  return res;
}

module.exports = { get_daily };
