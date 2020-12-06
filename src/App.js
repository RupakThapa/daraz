import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topheader from "./Topheader";
import Header from "./Header";
import Sidenav from "./Sidenav";
import banner from "./salebanner.png";
import Circleicon from "./Circleicon";
import logo1 from "./round1.png";
import logo2 from "./round2.png";
import logo3 from "./round3.png";
import logo4 from "./round4.png";
import logo5 from "./round5.png";
import Salesection from "./Salesection";
import Salesectionapi from "./Salesectionapi";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import { useEffect, useState } from "react";
import { useStateValue } from "./Context";
import { auth } from "./serverconfig";
import Single from "./Single";
import Page from "./Page";
import Footerend from "./Footerend";
import Register from "./Register";
import SearchPage from "./SearchPage";

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Topheader />
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/single/:id" component={Single} />
          <Route path="/searchpage/:searchquery" component={SearchPage} />
          <Route path="/page/:id" component={Page} />
          <Route path="/">
            {/* hom  */}
            <div className="displayarea">
              <Sidenav />

              <div className="mainimage">
                <CarouselProvider
                  interval={3000}
                  isPlaying={true}
                  naturalSlideWidth={20}
                  naturalSlideHeight={10}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>
                      <img
                        className="slidermain"
                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Oime2Rr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg"
                        alt=""
                      />
                    </Slide>
                    <Slide index={1}>
                      <img
                        className="slidermain"
                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1bLSh2Rr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg"
                        alt=""
                      />
                    </Slide>
                    <Slide index={2}>
                      <img
                        className="slidermain"
                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1qPCin9slXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg"
                        alt=""
                      />
                    </Slide>
                  </Slider>
                </CarouselProvider>
              </div>
            </div>
            <div className="container salebanner">
              <img src={banner} alt="" />
            </div>

            <div className="container circlearea">
              <Circleicon name="DarazMall" img={logo1} />
              <Circleicon name="dMart" img={logo2} />
              <Circleicon name="Recharge & Estore" img={logo3} />
              <Circleicon name="Vouchers" img={logo4} />
              <Circleicon name="Register As Seller" img={logo5} />
            </div>

            <Salesection className="container" />
            <Salesectionapi className="container" />
            <Footer />

            <Footerend />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
