import React from "react";
// import { useEffect, useState } from "react";
import "../css/TableComponent.css";
// import Axios from "axios";
import logo from "../../images/crackedEgg.gif";

// interface Props {
//   setDate: React.Dispatch<React.SetStateAction<string>>;
// }

function TableComponent() {
  // function TableComponent(props: Props) {
  // const [dailyList, setDailyList] = useState([]);

  // useEffect(() => {
  //   //List of the events of a patient for one day
  //   Axios.get("http://localhost:8000/daily").then((response) => {
  //     //Set list of the events of a patient for one day
  //     setDailyList(response.data);
  //     //Set the date to be shown in the title of the page
  //     props.setDate(CleanDate(response.data[0].timestamp));
  //   });
  // }, []);

  return (
    <div id="tableContainer" className="tableContainer table-wrapper-scroll-y">
      <img src={logo} alt="loading..." />
    </div>
  );
}

export default TableComponent;
