import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./Context";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import Footer from "./Footer";

function Checkout(id) {
  const [{ cart }] = useStateValue();

  return (
    <>
      <div className="CheckoutContainer">
        <div className="CheckoutProduct">
          {cart?.length == 0 ? (
            <p>Currently, There are no products in your cart.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className="CheckoutSummary">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
