import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import comboSVG from "../../../assets/combo.svg";
import restaurantSVG from "../../../assets/restaurant.svg";
import supportSVG from "../../../assets/support.svg";
import connectSVG from "../../../assets/connect.svg";

const OurService = () => {
  return (
    <div className="container-fluid ourServices-main-container d-flex flex-column justify-content-center align-items-center">
      <div>
        <p className="div-header-text">Our Services</p>
      </div>
      <div className="inner-main-div d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-center align-items-center">
        <div className="inner-main-div1 d-flex col-12 col-md-3 col-lg-3 flex-column flex-md-row flex-lg-row justify-content-center align-items-center">
          <img
            src="https://www.travelandleisure.com/thmb/_aMbik8KZYsUKc_6_XNeAOzPi84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg"
            alt="Description of the image"
          />
        </div>
        <div className="inner-main-div2 col-12 col-md-7 col-lg-7 d-flex flex-column align-items-center ">
          <div className="inner-main-div2-div1 d-flex col-12 flex-column flex-md-row flex-lg-row justify-content-center align-items-center">
            <div className="inner-main-div2-div1-1 d-flex flex-md-column flex-lg-column col-12 col-md-6 col-lg-6 justify-content-center align-items-left ">
              <div className="d-flex align-items-center">
                <img src={comboSVG} alt="SVG Image" className="icon" />
              </div>
              <div className="services-content-div">
                <p className="header-text">Beautiful Comdo</p>
                <p className="content-text">
                  We crawled the web so you don’t have to. Easily save mentioned
                  places.
                </p>
              </div>
            </div>
            <div className="inner-main-div2-div1-2 d-flex flex-md-column flex-lg-column col-12 col-md-6 col-lg-6 justify-content-center align-items-left">
              <div className="d-flex align-items-center">
                <img src={connectSVG} alt="SVG Image" className="icon" />
              </div>
              <div className="services-content-div">
                <p className="header-text">Easy to Connect</p>
                <p className="content-text">
                  Plan along with your friends with live syncing and
                  collaborative editing.
                </p>
              </div>
            </div>
          </div>
          <div className="inner-main-div2-div2 d-flex col-12  flex-column flex-md-row flex-lg-row justify-content-center align-items-center">
            <div className="inner-main-div2-div2-1 d-flex flex-md-column flex-lg-column col-12 col-md-6 col-lg-6 justify-content-center align-items-left ">
              <div className="d-flex align-items-center">
                <img src={restaurantSVG} alt="SVG Image" className="icon" />
              </div>
              <div className="services-content-div">
                <p className="header-text">Restaurants & Cafe</p>
                <p className="content-text">
                  Keep track of your budget and split the cost between your
                  tripmates.
                </p>
              </div>
            </div>
            <div className="inner-main-div2-div2-2 d-flex flex-md-column flex-lg-column col-12 col-md-6 col-lg-6 justify-content-center align-items-left ">
              <div className="d-flex align-items-center">
                <img src={supportSVG} alt="SVG Image" className="icon" />
              </div>
              <div className="services-content-div">
                <p className="header-text">24/7 Support</p>
                <p className="content-text">
                  Find the best places to visit with smart recommendations based
                  on your itinerary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
