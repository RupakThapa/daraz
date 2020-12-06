import React from "react";
import "./Topheader.css";
import { Link } from "react-router-dom";
function Topheader() {
  return (
    <div className="topheader">
      <span className="active">SAVE MORE ON APP</span>
      <span>SELL ON DARAZ</span>
      <span>CUSTOMER CARE</span>
      <span>TRACK MY ORDER</span>
      <Link to="/login">
        <span>LOGIN</span>
      </Link>

      <Link to="/register">
        <span>SIGN UP</span>
      </Link>
      <span>भाषा परिवर्तन</span>
    </div>
  );
}

export default Topheader;
