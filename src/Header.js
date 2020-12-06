import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CardTravel, Search } from "@material-ui/icons";
import { reducer, initialState } from "./reducer";
import { useStateValue } from "./Context";
import { auth } from "./serverconfig";
import Searchx from "./Searchx";

function Header() {
  const [{ cart, user }] = useStateValue();
  let username = auth.currentUser;

  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
          alt=""
        />
      </Link>
      {/* search */}
      <Searchx />
      <Link to="/Checkout">
        {" "}
        <ShoppingCartIcon />
      </Link>
      <p className="bubble">{cart?.length}</p>

      <Link to="/login">
        {" "}
        <p>
          <span className="Username">
            {username ? "Hi " + username.displayName : "Hi User"}
          </span>
        </p>
      </Link>
      <Link to="/">
        <img
          className="header__logo"
          src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1y_ArTlr0gK0jSZFnXXbRRXXa.png"
          alt=""
        />
      </Link>
      {/* two links */}
    </div>
  );
}

export default Header;
