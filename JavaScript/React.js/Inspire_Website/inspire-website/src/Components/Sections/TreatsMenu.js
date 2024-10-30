import React from "react";
import "./Menu.css";

function TreatsMenu() {
  return (
    <div className="menu">
      <h1>Treats</h1>
      <div className="menu_container">
        <div className="menu_wrapper">
          <ul className="menu_items_treats">
            <div className="menu_item">
              <h4>Protein Waffles</h4>
              <p>A brunch favorite!</p>
            </div>

            <div className="menu_item">
              <h4>Protein Oats</h4>
              <p>(desc)</p>
            </div>

            <div className="menu_item">
              <h4>Bowls</h4>
              <p>Acai, Mango, Sunset, & Monkey</p>
            </div>
          </ul>
        </div>
        <h4>Macros</h4>
        <p>Protein Waffles: 24G Protein - 300 Calories - 2G Sugar</p>
        <p>Protein Oats: 24G Protein - 300 Calories - 2G Sugar</p>
      </div>
    </div>
  );
}

export default TreatsMenu;
