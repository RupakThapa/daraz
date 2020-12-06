import React, { useState } from "react";
import "./Subtotal.css";
import { useStateValue } from "./Context";

import { getCartvalue } from "./reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const [voucher, setVoucher] = useState("");
  const [coupon, setCoupon] = useState(0);
  const [discounter, setdiscounter] = useState(false);
  function applyVoucher(e) {
    setVoucher(e.target.value);
    if (e.target.value != "RUPAK2020") {
      setCoupon(0);
    }
  }

  function newPrice(event) {
    setdiscounter(true);
    if (voucher === "RUPAK2020") {
      setCoupon(20);
    }

    event.preventDefault();
  }

  return (
    <div>
      <h2>Order Summary</h2>
      <div>Subtotal ({cart.length} items)</div>
      <div className="Shippingsection">
        <div>Shipping Fee</div>
        <div>
          {getCartvalue(cart) < 1000 ? (
            <strong>59</strong>
          ) : (
            <strong>FREE</strong>
          )}
        </div>
      </div>
      <div>
        <form className="Vouchersection">
          <input
            className="emailLogin"
            type="text"
            value={voucher}
            onChange={applyVoucher}
            placeholder="Enter Voucher Code"
          />
          <button
            type="submit"
            onClick={newPrice}
            className="loginBtnForm loginBtnReg"
          >
            APPLY
          </button>
        </form>
      </div>
      <div className="Vouchersection">
        <div>
          <strong>Total</strong>
        </div>
        <div className="product__price">
          Rs.{getCartvalue(cart) - (getCartvalue(cart) * coupon) / 100}
        </div>
      </div>
      <div>
        <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default Subtotal;
