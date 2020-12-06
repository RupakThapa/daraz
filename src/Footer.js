import React from "react";
import "./Footer.css";
import Footerend from "./Footerend";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer__col1">
            <div className="col1__top">
              <ul>
                <h3>Customer Care</h3>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Help Center
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    How to Buy
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Track Your Order
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </div>
            <div className="col1__bottom">
              <ul>
                <h3>Contact Us</h3>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Earn with Daraz
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Daraz University
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Sell on Daraz
                  </a>
                </li>
                <li className="smallfont">
                  <a className="footerlinks" href="#">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col2">
            <ul>
              <h3>Daraz</h3>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  About Daraz
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Careers
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Daraz Blog
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Terms & Conditiions
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Digital Payments
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Daraz Customer University
                </a>
              </li>
              <li className="smallfont">
                <a className="footerlinks" href="#">
                  Daraz Experts
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col3">
            <div className="footer__col3top">
              <div className="footer__col3left">
                <img
                  className="qrcode"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png"
                />
              </div>
              <div className="footer__col3right">
                <img
                  className="smalldarazlogo"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ECLKv7omBKNjSZFqXXXtqVXa.png"
                />

                <p className="footer__text__orange">
                  Happy Shopping
                  <p className="footer__text__white">Download App</p>
                </p>
              </div>
            </div>
            <div className="flex">
              <a className="footer-sprit icon-appstore"></a>
              <a className="footer-sprit icon-googleplay"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__middle">
        <div className="col1">
          <h3 className="footer__title">Payment Methods</h3>
          <a className="footer-sprit icon-payment1"></a>
          <a className="footer-sprit icon-payment2"></a>
          <a className="footer-sprit icon-payment3"></a>
          <a className="footer-sprit icon-payment4"></a>
        </div>
        <div className="col2">
          <h3 className="footer__title">Daraz International</h3>
          <a className="footer-sprit icon-pk"></a>
          <a className="footer-sprit icon-bd"></a>
          <a className="footer-sprit icon-sl"></a>
          <a className="footer-sprit icon-mm"></a>
          <a className="footer-sprit icon-np"></a>
        </div>
        <div className="col3">
          <h3 className="footer__title">Follow Us</h3>
          <a className="footer-sprit icon-fb"></a>
          <a className="footer-sprit icon-in"></a>
          <a className="footer-sprit icon-yt"></a>
          <a className="footer-sprit icon-dblog"></a>
        </div>
        <div className="col4">
          <h3 className="footer__title">Verified by</h3>
          <a className="footer-sprit icon-pci"></a>
        </div>
      </div>
      <h2 className="container">Cloned by Rupak Thapa</h2>
    </>
  );
}

export default Footer;
