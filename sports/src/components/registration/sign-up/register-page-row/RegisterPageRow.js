import React from "react";
import "./registerPageRow.css";
function RegisterPageRow(props) {
  return (
    <div className="register-row-wrapper">
      <div
        className="register-row-left"
        style={{ backgroundImage: `url(${props.registerRowImage})` }}
      ></div>
      <div className="register-row-right">
        <p className="register-row-right-text">{props.registerRowText}</p>
      </div>
    </div>
  );
}

export default RegisterPageRow;
