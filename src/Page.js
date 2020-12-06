import React, { useEffect, useState } from "react";
import data from "./productdb";
import "./Single.css";
import Rating from "./Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import styled from "styled-components";
import Footer from "./Footer";
import { useStateValue } from "./Context";
import axios from "axios";

function Page(props) {
  const [Apidata, setNewApiData] = useState([]);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    debugger;
    fetch(
      "https://cdn.contentful.com/spaces/wcfbnz8jd0qp/environments/master/entries?access_token=7o-JhHIraPOrMFZg9i9XHVO_TdDKjwwVfBLrvCNIA1I"
    )
      .then((res) => res.json())
      .then((response) => {
        setNewApiData(response.items);
      })
      .catch((e) => console.log(e));
    // axios
    //   .get(
    //     "https://cdn.contentful.com/spaces/wcfbnz8jd0qp/environments/master/entries?access_token=7o-JhHIraPOrMFZg9i9XHVO_TdDKjwwVfBLrvCNIA1I"
    //   )
    //   .then((response) => {
    //     console.log(response.data.items, "<<<<<<<<<");
    //     setNewApiData(response.data.items);
    //     console.log(Apidata, "ttt");
    //   })

    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const singleproduct = Apidata.find((x) => {
    if (x && x.fields && x.fields.id == props.match.params.id) {
      return x;
    }
  });

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: singleproduct.fields.id,
        title: singleproduct.fields.title,
        image: singleproduct.fields.image,
        price: singleproduct.fields.price,
        discount: singleproduct.fields.discount,
        rating: singleproduct.fields.rating,
      },
    });
  };

  return (
    <>
      {singleproduct !== undefined && (
        <>
          <div className="singlepageContainer">
            <div className="singlePictureContainer">
              <img className="singlePicture" src={singleproduct.fields.image} />
              {/* <img src="{singleproduct.fields.image}" alt="" /> */}
            </div>
            <div className="singleDescription">
              <h1 className="singleTitle">{singleproduct.fields.title}</h1>

              <Rating
                ratingx={singleproduct.fields.rating}
                noratingx={5 - singleproduct.fields.rating}
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
                      singleproduct.fields.price -
                        (singleproduct.fields.price *
                          singleproduct.fields.discount) /
                          100
                    )}
                  </strong>
                </p>

                <small>
                  <span className="strike">
                    RS.{singleproduct.fields.price}
                  </span>
                  {-singleproduct.fields.discount}%
                </small>
              </p>

              <div className="singleDescriptionx">
                <p>This section is for description for the given product</p>

                <ul>
                  <li>Cotton Fleece Blend Hoodie</li>
                  <li>L for chest size 36-38 inch</li>
                  <li>XL for chest size 38-40 inch</li>
                </ul>
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
      )}
    </>
  );
}

export default Page;
