import { Card } from "@material-ui/core";
import React from "react";
import "./Salesection.css";
import Productcard from "./Productcard";
import Single from "./Single";
import data from "./productdb";
import { Link } from "react-router-dom";

function Salesection() {
  return (
    <div className="container salesection">
      <h3>Flash sale</h3>
      <div className="flash__title">
        <p className="flash__text">On Sale Now</p>
        <button className="flash__button">SHOP MORE</button>
      </div>
      <div className="product__section">
        {data.productdb.map((item) => (
          <Link className="product__sectionLink" to={"/single/" + item._id}>
            <Productcard
              id={item._id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              ratingnos={item.ratingnos}
              discount={item.discount}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Salesection;
