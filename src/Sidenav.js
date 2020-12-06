import React from "react";
import "./Sidenav.css";

function Sidenav() {
  return (
    <nav>
      <ul class="nav-menu nav-vertical">
        <li>
          <a href="#" class="nav-active">
            Electronic Devices
          </a>

          <ul>
            <li>
              <a href="#">Mobiles</a>
            </li>
            <li>
              <a href="#">Tablets</a>
              <ul>
                <li>
                  <a href="#">Samsung Tablets</a>
                </li>
                <li>
                  <a href="#">Apple iPads</a>
                </li>
                <li>
                  <a href="#">Huawei Tablets</a>
                </li>
                <li>
                  <a href="#">Ryte Tablets</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Laptops</a>
            </li>
            <li>
              <a href="#">Desktops</a>
            </li>{" "}
            <li>
              <a href="#">Gaming Consoles</a>
            </li>{" "}
            <li>
              <a href="#">Cameras</a>
            </li>{" "}
            <li>
              <a href="#">Printers</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">TV & Home Appliances</a>
        </li>
        <li>
          <a href="#">Health & Beauty</a>
        </li>
        <li>
          <a href="#">Electronic Accessories</a>
        </li>
        <li>
          <a href="#">Babies & Toys</a>
        </li>
        <li>
          <a href="#">Groceries & Pets</a>
        </li>
        <li>
          <a href="#">Home & Lifestyle</a>
        </li>
        <li>
          <a href="#">Women's Fashion</a>
        </li>
        <li>
          <a href="#">Men's Fashion</a>
        </li>
        <li>
          <a href="#">Watches & Accessories</a>
        </li>
        <li>
          <a href="#">Sports & Outdoor</a>
        </li>
        <li>
          <a href="#">Automotive & Motorbike</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
