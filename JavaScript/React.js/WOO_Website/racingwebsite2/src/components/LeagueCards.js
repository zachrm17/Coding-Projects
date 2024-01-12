//Leagues to include: FCL, SCRA, EDS, WOODS, Blue Collar, RWL
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function LeagueCards() {
  return (
    <div className="cards">
      <h1>Xbox Leagues</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/fclnewlogo.png"
              text="FCL Racing League"
              label="Thursday, Friday, Sunday"
              path="/FCL"
            />
            <CardItem
              src="images/scra.png"
              text="SCRA"
              label="Monday-Wednesday"
              path="/SCRA"
            />
            <CardItem
              src="images/nightowl.png"
              text="Night Owl"
              label="Fridays & Saturdays"
              path="/NightOwl"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/rwl.png"
              text="Runnin Wild League"
              label="Weeknights"
              path="/RWL"
            />
            <CardItem
              src="images/twothree.jpg"
              text="Two Three Racing Leauge"
              label="Saturday & Sunday"
              path="/TwoThree"
            />
            <CardItem
              src="images/ESR.jpg"
              text="ESR"
              label="Tuesday's"
              path="/ESR"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/spareparts.png"
              text="Spare Parts"
              label="Nightly"
              path="/SpareParts"
            />
            <CardItem
              src="images/fastaction.jpg"
              text="Fast Action"
              label="Sunday & Wednesday"
              path="/FastAction"
            />
            <CardItem
              src="images/legallimit.jpg"
              text="Legal Limit Racing"
              label="Customs"
              path="/LegalLimit"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/BCRL.png"
              text="Banging Cushions Racing League"
              label="Multiple Nights"
              path="/BCRL"
            />

            <CardItem
              src="images/oas.jpg"
              text="Oceaiana All Stars"
              label="Australian Based"
              path="/OAS"
            />
          </ul>
        </div>
      </div>
      <p>
        If you would like your league added to this list, please contact Zachary
        Mietzner (xKingGingerx)
      </p>
    </div>
  );
}

export default LeagueCards;
