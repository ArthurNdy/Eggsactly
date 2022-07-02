import React from "react";
import "./App.css";
import logo from "./images/crackedEgg.gif";
import ButtonComponent from "./components/tsx/ButtonComponent";

// import TableComponent from "./components/tsx/TableComponent";
// import HeaderComponent from "./components/tsx/HeaderComponent";
// import TitleComponent from "./components/tsx/TitleComponent";
// import AlertCardComponent from "./components/tsx/AlertCardComponent";

function App() {
  //State to show the alerts card on button click
  // const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  //State to show the nb of alerts on the button
  // const [nbAlerts, setNbAlerts] = useState(0);

  return (
    <div className="HomePage">
      <h1 className="Title"> Eggsactly ! </h1>
      <img className="Gif" src={logo} alt="loading..." />
      <div className="ButtonContainer">
        <ButtonComponent />
      </div>
    </div>
  );
}

export default App;
