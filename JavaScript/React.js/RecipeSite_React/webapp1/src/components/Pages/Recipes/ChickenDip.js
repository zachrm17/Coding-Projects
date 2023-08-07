import "../../../App.css";
import Footer from "../../Footer";

function ChickenDip() {
  return (
    <>
      <>
        <div id="card-container">
          <div id="card-title">Crockpot Buffalo Chicken Dip</div>
          <div id="recipe-image">
            <img src="images/chickendip.jpg" alt="stirfry" />
          </div>
          <div id="details">
            Per Serving - 8 Servings
            <br></br>
            Calories: <span class="detail-value">135</span> | Protein:{" "}
            <span class="detail-value">22G</span> | Carbs:{" "}
            <span class="detail-value">8g</span> | Fat:{" "}
            <span class="detail-value">1G</span>
          </div>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <br></br>
            <br></br>
            <ul class="checkmark">
              <li>2 Cans Tyson White Canned Chicken</li>
              <li>8 tbsp Franks Red Hot Sauce</li>
              <li>1 Bag Fat Free Cheddar Cheese</li>
              <li>1/2 Cup Fat Free Ranch</li>
              <li>1 Package Fat Free Cream Cheese</li>
            </ul>
          </div>
          <div id="method">
            <span class="card-item-title">Directions</span>
            <br></br>
            <br></br>
            <ol>
              <li>Combine all ingredients into crockpot.</li>
              <li>Cook on high for 1.5 hours.</li>
              <li>Serve and enjoy!</li>
            </ol>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default ChickenDip;
