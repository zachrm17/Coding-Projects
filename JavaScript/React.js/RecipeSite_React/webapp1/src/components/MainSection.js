import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="hero-container">
      <div className="flex-container">
        <div className="box">
          <h1>
            <u>GUIDE TO GAINS</u>
          </h1>
          <br></br>
          {/* <h2>Buy my $5 Recipe Book</h2> */}
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Buy my $5 Recipe Book
          </Button>
          <br></br>
          <p>or</p>
          <h2>Check out some FREE Recipes below!</h2>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
