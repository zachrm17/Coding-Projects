import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export function Cards() {
  return (
    <div className="cards">
      <h1>Check out these TASTY recipes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/walkingtaco.jpg"
              text="Walking Taco"
              label="575 Cals - 83G Protein"
              path="/walkingtaco"
            />
            <CardItem
              src="images/chickenfries.jpg"
              text="Loaded Chicken Cheese Fries"
              label="590 Cals - 55G Protein"
              path="/chickencheesefries"
            />
            <CardItem
              src="images/chickendip.jpg"
              text="Crockpot Buffalo Chicken Dip"
              label="135 Cals - 22G Protein"
              path="/chickendip"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src="images/spaghetti.jpg"
              text="Spaghetti Meal Prep"
              label="595 Cals - 66G Protein"
              path="/spaghetti"
            />
            <CardItem
              src="images/chickenfries.jpg"
              text="Loaded Chicken Cheese Fries"
              label="590 Cals - 55G Protein"
              path="/chickencheesefries"
            />
            <CardItem
              src="images/pboats.jpg"
              text="Chocolate Overnight Oats"
              label="475 Cals - 52G Protein"
              path="/pboats"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export function RecipePage() {
  return (
    <div className="cards-recipePage">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/walkingtaco.jpg"
              text="Walking Taco"
              label="575 Cals - 83G Protein"
              path="/walkingtaco"
            />
            <CardItem
              src="images/chickendip.jpg"
              text="Crockpot Buffalo Chicken Dip"
              label="135 Cals - 22G Protein"
              path="/chickendip"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/spaghetti.jpg"
              text="Spaghetti Meal Prep"
              label="595 Cals - 66G Protein"
              path="/spaghetti"
            />
            <CardItem
              src="images/chickenfries.jpg"
              text="Loaded Chicken Cheese Fries"
              label="590 Cals - 55G Protein"
              path="/chickencheesefries"
            />
            <CardItem
              src="images/pboats.jpg"
              text="Chocolate Overnight Oats"
              label="475 Cals - 52G Protein"
              path="/pboats"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// export function AffiliateCards() {
//   return (
//     <div className="cards">
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <ul className="cards__item">
//             <CardItem
//               src="images/legion.jpg"
//               text="Legion Supplements"
//               label="20% OFF!! - Code: 'RYAN'"
//               path="https://legionathletics.com/products/workout-supplements/?r=6e93j&utm_source=bc_ryanb_6e93j&utm_campaign=bc"
//             />
// //             <CardItem
//               src="images/flavorgod.jpg"
//               text="FlavorGod"
//               label="10% OFF!! - Code: 'RYAN'"
//               path="https://flavorgod.com/?ref=xwChonAGnDGFNR&fbclid=IwAR0cL-dBbTJUucbIsvVpnXdF1tQr0QOf0QT3TeuTE50I574sJEmjc91-5WQ"
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
