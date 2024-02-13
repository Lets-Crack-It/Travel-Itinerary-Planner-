import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const InroDiv = () => {
  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-lg-6 col-md-12 p-0">
          <div className="text-container">
            <h1>You'll never travel without our trip planner again</h1>
            <p>
              Build, organize, and map your itineraries in a free travel app
              designed for vacations & road trips
            </p>
            <div class="buttons">
              {/* <button class="btn planing-btn">Start Planing</button> */}
              <Button as="a" href="#" filled className="exporemore-btn1">
                Start Planing
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 p-0 diagonal-bg-container">
          <div className="background-image"></div>
        </div>
      </div>
    </div>
  );
};

export default InroDiv;
