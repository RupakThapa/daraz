import React, { useState } from "react";
import data from "./productdb";
import "./Single.css";
import Rating from "./Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import styled from "styled-components";
import Footer from "./Footer";
import { useStateValue } from "./Context";

function Single(props) {
  const singleproduct = data.productdb.find(
    (x) => x._id === props.match.params.id
  );

  const SinglePicturex = styled.div`
    background: url(${singleproduct.image}) no-repeat center center;
    /* background: #232323; */
    background-size: contain;
    color: red;
    width: 100%;
    height: 500px;
  `;

  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: singleproduct.id,
        title: singleproduct.title,
        image: singleproduct.image,
        ratingnos: singleproduct.ratingnos,
        price: singleproduct.price,
        discount: singleproduct.discount,
        rating: singleproduct.rating,
      },
    });
  };
  return (
    <>
      <div className="singlepageContainer">
        <div className="singlePictureContainer">
          {/* <img className="singlePicture" src={singleproduct.image} /> */}
          <SinglePicturex></SinglePicturex>
        </div>
        <div className="singleDescription">
          <h1 className="singleTitle">{singleproduct.title}</h1>

          <Rating
            ratingx={singleproduct.rating}
            noratingx={5 - singleproduct.rating}
            ratingnos={singleproduct.ratingnos}
          />
          <p className="skybluelink">69 Ratings | 18 Answered Questions</p>
          <p className="skybluelink">
            Brand: No BrandMore Fixtures & Plumbing from No Brand
          </p>
          <p>
            <p className="product__price">
              <strong>
                Rs.{" "}
                {Math.ceil(
                  singleproduct.price -
                    (singleproduct.price * singleproduct.discount) / 100
                )}
              </strong>
            </p>

            <small>
              <span className="strike">RS.{singleproduct.price}</span>
              {-singleproduct.discount}%
            </small>
          </p>

          <div className="singleDescriptionx">
            <p>
              This section is for description for the given product.To save time
              the description is not provided for all the products.It will be
              constant dummy value for all.
            </p>

            <li>Cotton Fleece Blend Hoodie</li>
            <li>L for chest size 36-38 inch</li>
            <li>XL for chest size 38-40 inch</li>
          </div>
          <div className="btnGroup">
            <button onClick={addToCart} className="buyBtn">
              Buy Now
            </button>
            <button onClick={addToCart} className="cartBtn">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="singleAddress">
          <p>
            <strong>Delivery Options</strong>
          </p>
          <div className="address">
            <p>
              <LocationOnOutlinedIcon className="sideIcon" />
            </p>
            <p>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</p>
            <p>CHANGE</p>
          </div>
          <hr></hr>
          <div className="delivery">
            <p>
              <InboxIcon className="sideIcon" />
            </p>
            <p>Home Delivery</p>
            <p>Rs.59</p>
          </div>
          <hr></hr>
          <div className="cod">
            <p>
              <LocalAtmIcon className="sideIcon" />
            </p>
            <p>Cash on Delivery Available</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Single;
