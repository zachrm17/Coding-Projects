//Creators to include: Jdubbs, Natty, Coop
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function CreatorCards() {
  return (
    <div className="cards">
      <h1>Content Creators</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/creatorpics/jdubbs/jdubbsgraphics.png"
              text="Jdubbs Graphicz"
              label="Driver Cards & Banners"
              path="/Jdubbs"
            />
            <CardItem
              src="images/creatorpics/jessemeek/bulldog.jpg"
              text="Bulldog Speedshop & Graphics"
              label="Driver Cards & Videos"
              path="/Bulldog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreatorCards;
