import React from "react";
import "./Productcard.css";

import { useStateValue } from "./Context";
import Rating from "./Rating";

function Productcard({ id, title, image, price, discount, rating, ratingnos }) {
  // const [{ cart }, dispatch] = useStateValue();
  const norating = 5 - rating;

  // const addToCart = () => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       discount: discount,
  //       rating: rating,
  //     },
  //   });
  // };

  return (
    <div className="product">
      <img className="product__image" src={image} />
      <p>
        <p className="product__title">{title}</p>
        <p className="product__price">
          <strong>Rs. {Math.ceil(price - (price * discount) / 100)}</strong>
        </p>

        <small>
          <span className="strike">RS.{price}</span>
          {-discount}%
        </small>

        <Rating ratingx={rating} noratingx={norating} ratingnos={ratingnos} />
      </p>
      {/* <button onClick={addToCart}>add to cart</button> */}
    </div>
  );
}

export default Productcard;
