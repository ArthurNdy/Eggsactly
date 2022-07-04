import React from "react";
import "../css/Homepage.css";
import crackedEgg from "../../images/crackedEgg.gif";
import ButtonComponent from "../../components/tsx/ButtonComponent";
import { Link } from "react-router-dom";

// import TableComponent from "./components/tsx/TableComponent";
// import HeaderComponent from "./components/tsx/HeaderComponent";
// import TitleComponent from "./components/tsx/TitleComponent";
// import AlertCardComponent from "./components/tsx/AlertCardComponent";

function HomePage() {
  //State to show the alerts card on button click
  // const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  //State to show the nb of alerts on the button
  // const [nbAlerts, setNbAlerts] = useState(0);

  return (
    <div className="HomePage">
      <h1 className="Title"> Eggsactly ! </h1>
      <h2 className="Subtitle"> (or how to get your eggs right every time)</h2>
      <img className="Gif" src={crackedEgg} />
      <div className="ButtonContainer">
        <Link to="/recipes">
          <ButtonComponent />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
