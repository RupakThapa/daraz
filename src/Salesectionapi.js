import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Salesection.css";
import Productcard from "./Productcard";
import Single from "./Single";
import data from "./productdb";
import { Link } from "react-router-dom";
import axios from "axios";

function Salesectionapi() {
  const [newdata, setNewData] = useState([]);
  const api_url =
    "https://cdn.contentful.com/spaces/wcfbnz8jd0qp/environments/master/entries?access_token=7o-JhHIraPOrMFZg9i9XHVO_TdDKjwwVfBLrvCNIA1I";

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        console.log(response.data.items);
        setNewData(response.data.items);
        // console.log(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container salesection">
      <h3>Flash sale (Data Fetched From Api using Axios)</h3>
      <div className="flash__title">
        <p className="flash__text">On Sale Now</p>
        <button className="flash__button">SHOP MORE</button>
      </div>
      <div className="product__section">
        {/* {newdata.map((item) => (
          <p>{item.fields.title}</p>
        ))} */}

        {newdata.map((item) => (
          <Link className="product__sectionLink" to={"/page/" + item.fields.id}>
            {/* <Productcard
              id={item.fields._id}
              // title={item.fields.title}
              // price={item.fields.price}
              // discount={item.fields.discount}
              // image={item.fields.image}
            /> */}

            <Productcard
              id={item.fields.id}
              title={item.fields.title}
              price={item.fields.price}
              rating={item.fields.rating}
              discount={item.fields.discount}
              image={item.fields.image}
              ratingnos={item.fields.ratingnos}
            />

            {/* <p>{item.fields.id}</p>
            <p>{item.fields.title}</p>
            <p>{item.fields.price}</p>
            <p>{item.fields.discount}</p>
            <p>{item.fields.rating}</p>
            <p>{item.fields.ratingnos}</p>
            <p>{item.fields.image}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Salesectionapi;
