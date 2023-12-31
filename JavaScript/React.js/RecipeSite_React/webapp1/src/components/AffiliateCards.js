import React from "react";
import AffiliateCardItem from "./AffiliateCardItem";
import "./AffiliateCards.css";

export function AffiliateCards() {
  return (
    <div className="cards">
      <h1>Use code 'RYAN' to save you money!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AffiliateCardItem
              src="images/legion.jpg"
              text="Legion Supplements"
              label="20% OFF!! - Code: 'RYAN'"
              path="https://legionathletics.com/products/workout-supplements/?r=6e93j&utm_source=bc_ryanb_6e93j&utm_campaign=bc"
            />
            <AffiliateCardItem
              src="images/flavorgod.jpg"
              text="FlavorGod"
              label="10% OFF!! - Code: 'RYAN'"
              path="https://flavorgod.com/?ref=xwChonAGnDGFNR&fbclid=IwAR0cL-dBbTJUucbIsvVpnXdF1tQr0QOf0QT3TeuTE50I574sJEmjc91-5WQ"
            />
          </ul>
          <ul className="cards__items">
            <AffiliateCardItem
              src="images/helimix.jpg"
              text="Helimix"
              label="20% OFF + Free Shipping! - Code: 'RYAN'"
              path="https://helimix.com/?aff=6427"
            />
            <AffiliateCardItem
              src="images/fitbutters.jpg"
              text="Fit Butters"
              label="10% Off! - Code: 'RYAN10'"
              path="https://fitbutters.com/?platform=grin&link_id=1437727&token=3ot4sPMG0fDoEJw36CuK7JUUBrUwBjpT&contact_id=654584aa-65e8-4097-b77d-03003a33babc&attribution_window=3"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
