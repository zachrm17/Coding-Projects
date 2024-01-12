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
              src="images/rumbleatfals.jpg"
              text="Rumble at Fairbury"
              label="February 22nd-24th"
              path="/RumbleAtFALS"
            />
          </ul>
        </div>
      </div>
      <h1>Past Special Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/paintcountypink.jpg"
              text="Paint the County Pink"
              label="October 29th"
              path="/paintcountypink"
            />
            <CardItem
              src="images/luau.jpg"
              text="Lu'au at Limaland"
              label="December 4th-6th"
              path="/luau"
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
