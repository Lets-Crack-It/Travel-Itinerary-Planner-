import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const PlaceSelection = () => {
  return (
    <div className="container-fluid placeselection-main-container d-flex flex-column justify-content-center align-items-center">
      <div>
        <p className="div-header-text">
          Ready to plan your trip in half the time?
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div class="buttons">
          <Button as="a" href="#" filled className="exporemore-btn1">
            Start Planing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceSelection;
