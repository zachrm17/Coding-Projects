import React from "react";
import "./Menu.css";

function DrinkMenu() {
  return (
    <div className="menu">
      <h1>Drinks</h1>
      <br></br>
      <div className="menu_container">
        <h2>Refreshers</h2>
        <div className="menu_wrapper">
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Anti Aging</h4>
              <p>Sweet Raspberry</p>
            </div>
            <div className="menu_item">
              <h4>Destresser</h4>
              <p>Berry Acai</p>
            </div>
            <div className="menu_item">
              <h4>Immunity</h4>
              <p>Orange Flavored</p>
            </div>
            <div className="menu_item">
              <h4>Sour Punch</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Cucumber Watermelon</h4>
              <p>(desc)</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Berry Blast</h4>
              <p>Wild Berry</p>
            </div>
            <div className="menu_item">
              <h4>Digestive</h4>
              <p>Soft Lemonade</p>
            </div>
            <div className="menu_item">
              <h4>Jolly Ranch</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Tropical</h4>
              <p>Mango</p>
            </div>
            <div className="menu_item">
              <h4>Strawberry Melon</h4>
              <p>(desc)</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Captain America</h4>
              <p>Sour Watermelon</p>
            </div>
            <div className="menu_item">
              <h4>Cherry</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Acai Lemonade</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Sunrise</h4>
              <p>Sweet Orange</p>
            </div>
            <div className="menu_item">
              <h4>Hulk</h4>
              <p>Sour Grape</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Cucumber Fresh</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Olaf</h4>
              <p>Blue Raspberry</p>
            </div>
            <div className="menu_item">
              <h4>Stitch</h4>
              <p>Grape</p>
            </div>
            <div className="menu_item">
              <h4>Watermelon Splash</h4>
              <p>(desc)</p>
            </div>
            <div className="menu_item">
              <h4>Sweet Tart</h4>
              <p>(desc)</p>
            </div>
          </ul>
        </div>
        <h2>Protein Coffee & More</h2>
        <div className="menu_wrapper">
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Caramel Latte</h4>
              <p>(desc)</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Mocha</h4>
              <p>(desc)</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Houseblend</h4>
              <p>(desc)</p>
            </div>
          </ul>
          <ul className="menu_items_drinks">
            <div className="menu_item">
              <h4>Slimchata</h4>
              <p>(desc)</p>
            </div>
          </ul>
        </div>
        <h4>Macros</h4>
        <p>Refreshers: 1G Sugar - 24 Calories - Antioxidant & Vitamin C</p>
        <p>Coffees: 22.5G Protein - 150 Calories - 3G Sugar</p>
        <p>Slimchata: 19.5G Protein - 150 Clalories</p>
      </div>
    </div>
  );
}

export default DrinkMenu;
