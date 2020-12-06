import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Circleicon.css";

function Circleicon(props) {
  return (
    <div className="circlebutton">
      <img className="imground" src={props.img} alt="" />
      <div className="btnname">{props.name}</div>
      <ArrowForwardIosIcon className="arrow" />
    </div>
  );
}

export default Circleicon;
