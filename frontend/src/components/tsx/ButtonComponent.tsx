import React from "react";
import "../css/ButtonComponent.css";

function ButtonComponent() {
  return (
    <button className="button-pushable" role="button">
      <span className="button-shadow"></span>
      <span className="button-edge"></span>
      <span className="button-front text">Let&apos;s cook !</span>
    </button>
  );
}

export default ButtonComponent;
