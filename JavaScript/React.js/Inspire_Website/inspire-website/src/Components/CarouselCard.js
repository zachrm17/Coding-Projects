import React from "react";
import "./Carousel.css";

const Carousel_Card = ({ imageUrl }) => (
  <div className="carousel_container">
    <div className="card">
      <img src={imageUrl} alt="carousel-item" />
    </div>
  </div>
);

export default Carousel_Card;
