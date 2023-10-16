import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function SpecialEventCards() {
  return (
    <div className="cards">
      <h1>Upcoming Special Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/luau.jpg"
              text="Lu'au at Limaland"
              label="December 4th-6th"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/icebreaker2.jpg"
              text="2nd Annual Ice Breaker"
              label="January 2024"
              path="/"
            />
            <CardItem
              src="images/nightmare.jpg"
              text="Nightmare at Elm Creek"
              label="October 27th"
              path="/"
            />
          </ul>
        </div>
      </div>
      <p>
        If you would like your special event displayed, please contact Zachary
        Mietzner (KingGinger)
      </p>
    </div>
  );
}

export default SpecialEventCards;
