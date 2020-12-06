import React from "react";
import { useStateValue } from "./Context";
import "./Checkout.css";
import CloseIcon from "@material-ui/icons/Close";

function CheckoutProduct({ id, title, image, discount, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeCart = () => {
    dispatch({
      type: "REMOVE_CART",
      id: id,
    });
  };

  return (
    <div className="CheckourProductSingle">
      <img className="CheckoutImage" src={image} />
      <div>
        <h3>{title}</h3>
        <p>Only 2 item(s) in stock</p>
      </div>

      <div className="CheckoutDetails">
        <p className="product__price">
          <strong>Rs. {Math.ceil(price - (price * discount) / 100)}</strong>
        </p>

        <small>
          <span className="strike">RS.{price}</span>
          {-discount}%
        </small>
      </div>

      <CloseIcon onClick={removeCart} />
    </div>
  );
}

export default CheckoutProduct;
