import Footer from "../../Footer";
import "./RecipePages.css";

function WalkingTaco() {
  return (
    <>
      <>
        <div id="card-container">
          <div id="card-title">High Protein Walking Taco</div>
          <div id="recipe-image">
            <img src="images/walkingtaco.jpg" alt="walking taco" />
          </div>
          <div id="details">
            Calories: <span class="detail-value">575</span> | Protein:{" "}
            <span class="detail-value">83G</span> | Carbs:{" "}
            <span class="detail-value">9g</span> | Fat:{" "}
            <span class="detail-value">21G</span>
          </div>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <br></br>
            <br></br>
            <ul class="checkmark">
              <li>1 Bag Hot & Spicy OR Loaded Taco Quest Chips</li>
              <li>8oz RAW Lean Ground Beef</li>
              <li>85g Nonfat Plain Greek Yogurt</li>
              <li>28g Fat Free Cheddar Cheese</li>
              <li>Shredded Lettuce</li>
              <li>Taco Seasoning & Onion Powder</li>
            </ul>
          </div>
          <div id="method">
            <span class="card-item-title">Directions</span>
            <br></br>
            <br></br>
            <ol>
              <li>
                Cook ground beef, add seasonings to your liking, and drain fat.
              </li>
              <li>
                Add beef to bowl and add cheddar cheese and greek yogurt. Stir
                and combine
              </li>
              <li>
                Open bag of Quest chips and add the beef mix to the bag
                carefully without ripping bag.
              </li>
              <li>Add lettuce too bag, mix and enjoy!</li>
            </ol>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default WalkingTaco;
