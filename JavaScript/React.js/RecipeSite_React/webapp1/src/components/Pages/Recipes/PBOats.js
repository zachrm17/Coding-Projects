import "../../../App.css";
import Footer from "../../Footer";

function PBOats() {
  return (
    <>
      <>
        <div id="card-container">
          <div id="card-title">Chocolate Overnight Oats</div>
          <div id="recipe-image">
            <img src="images/pboats.jpg" alt="pboats" />
          </div>
          <div id="details">
            Calories: <span class="detail-value">475</span> | Protein:{" "}
            <span class="detail-value">52G</span> | Carbs:{" "}
            <span class="detail-value">46G</span> | Fat:{" "}
            <span class="detail-value">8G</span>
          </div>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <br></br>
            <br></br>
            <ul class="checkmark">
              <li>65g Oats</li>
              <li>100g Nonfat Greek Yogurt</li>
              <li>1/2 Cup Almond Milk</li>
              <li>1 tbsp Cocoa Powder</li>
              <li>1.5 scoops Chocolate Protein Powder</li>
            </ul>
          </div>
          <div id="method">
            <span class="card-item-title">Directions</span>
            <br></br>
            <br></br>
            <ol>
              <li>
                Add indgredients into a jar or container starting with the oats.
              </li>
              <li>
                Once all ingredients are in jar, shake to mix, and refrigerate
                overnight.
              </li>
              <li>Open in morning and enjoy!</li>
            </ol>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default PBOats;
