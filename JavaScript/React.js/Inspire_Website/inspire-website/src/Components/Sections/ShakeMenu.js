import React from "react";
import "./Menu.css";

function ShakeMenu() {
  return (
    <div className="menu">
      <h1>Shakes</h1>
      <div className="menu_container">
        <div className="menu_wrapper">
          <ul className="menu_items">
            <div className="menu_item">
              <h4>Chocobanana</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Berry Blossom</h4>
              <p>Banana & Mixed Berries</p>
            </div>
            <div className="menu_item">
              <h4>Banana Split</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Fruity Pebbles</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>PB Lover</h4>
              <p>For those Peanut Butter lovers</p>
            </div>
          </ul>
          <ul className="menu_items">
            <div className="menu_item">
              <h4>PB Chocobanana</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Detox</h4>
              <p>Orange Tropical, Spniach, Fiber, Probiotic</p>
            </div>
            <div className="menu_item">
              <h4>Mango Pineapple</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Birthday Cake</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Cinnamon Roll</h4>
              <p>(dec)</p>
            </div>
          </ul>
          <ul className="menu_items">
            <div className="menu_item">
              <h4>PB Blast</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Churro</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>S'mores</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Butter Pecan</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>PB Banana</h4>
              <p>For those Peanut Butter lovers</p>
            </div>
          </ul>
        </div>
        <h4>Macros</h4>
        <p>Small Shake: 24G Protein - 200 Calories - 13G Carbs</p>
        <p>Large Shake: 36G Protein - 300 Calories - 28G Carbs</p>
      </div>
    </div>
  );
}

export default ShakeMenu;
