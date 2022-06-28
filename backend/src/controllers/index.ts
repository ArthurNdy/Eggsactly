import app from "../application";
import daily_controller from "./daily-controller";
import alerts_controller from "./alerts-controller";

app.get("/daily", daily_controller); //get data for the daily events of a patient
app.get("/alerts", alerts_controller); //get data for the daily ESSENTIAL events of a patient
