import React from "react";
import "../css/AlertCardComponent.css";
import AlertsTableComponent from "./AlertsTableComponent";

// interface Props {
//   setNbAlerts: React.Dispatch<React.SetStateAction<number>>;
// }

//Card is displayed when we click on the "important events" button
function AlertCardComponent() {
  return (
    <div className="card">
      <h1 className="card-title">Important Events</h1>
      <div className="card-body">
        <AlertsTableComponent />
      </div>
    </div>
  );
}

export default AlertCardComponent;
