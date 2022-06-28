// const { customer_notifications_endpoint } = require('../../../services/internal/endpoints');
// const { customer_notifications_treatment } = require('../../../services/internal/treatments');

async function alerts_controller(_, res) {
  try {
    const data = await sequelize.query(
      "SELECT id, timestamp, event_type, alert_id, care_recipient_id, payload_as_text FROM birdietest.events WHERE DATE_FORMAT(timestamp, '%d/%m/%Y') = '10/05/2019' AND care_recipient_id = 'df50cac5-293c-490d-a06c-ee26796f850d' AND (event_type='general_observation' OR event_type='mood_observation' OR event_type='alert_qualified') ORDER BY TIMESTAMP(timestamp)"
    );
    console.log("(alerts_controller) data", data[0]);
    res.send(data[0]);
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(`(alerts_controller) Error: ${err}`);
    console.error(err);
  }
}

module.exports = alerts_controller;
