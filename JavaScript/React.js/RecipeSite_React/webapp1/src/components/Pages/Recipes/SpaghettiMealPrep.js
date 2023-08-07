import "../../../App.css";
import Footer from "../../Footer";

function SpaghettiMealPrep() {
  return (
    <>
      <>
        <div id="card-container">
          <div id="card-title">Spaghetti Meal Prep</div>
          <div id="recipe-image">
            <img src="images/spaghetti.jpg" alt="burrito" />
          </div>
          <div id="details">
            Per Meal - 6 Meals
            <br></br>
            Calories: <span class="detail-value">595</span> | Protein:{" "}
            <span class="detail-value">66G</span> | Carbs:{" "}
            <span class="detail-value">54G</span> | Fat:{" "}
            <span class="detail-value">8G</span>
          </div>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <br></br>
            <br></br>
            <ul class="checkmark">
              <li>1 Box Barilla Protein Pasta</li>
              <li>1 Bag Fat Free Mozzarella Cheese</li>
              <li>1 Jar Organic Pasta Sauce</li>
              <li>2lbs Lean Ground Beef</li>
            </ul>
          </div>
          <div id="method">
            <span class="card-item-title">Directions</span>
            <br></br>
            <br></br>
            <ol>
              <li>
                Cook ground beef and drain fat. At the same time, cook box of
                pasta per instructions on the box.
              </li>
              <li>Add pasta sauce to pan with beef, stir to combine.</li>
              <li>Add pasta to pan with beef and sauce, stir and combine.</li>
              <li>
                Dish into six different containers and enjoy one every day for
                lunch or dinner!
              </li>
            </ol>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default SpaghettiMealPrep;
