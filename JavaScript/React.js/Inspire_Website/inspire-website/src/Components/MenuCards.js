import React from "react";
import "./MenuCards.css";
import CardItem from "./CardItem";

function MenuCards() {
  return (
    <>
      <div className="cards">
        <h1>Menu</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="/photos/shakes.jpg"
                text="Shakes"
                label="View all Shakes here!"
                path="/shakes"
              />
              <CardItem
                src="/photos/teas.jpg"
                text="Drinks"
                label="Refreshers, Teas, & More!"
                path="/drinks"
              />
              <CardItem
                src="/photos/treats.jpg"
                text="Treats"
                label="Oats, Waffles, & More!"
                path="/treats"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCards;
