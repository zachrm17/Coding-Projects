import "../../../App.css";
import Footer from "../../Footer";

function ChickenCheeseFries() {
  return (
    <>
      <>
        <div id="card-container">
          <div id="card-title">Chicken Cheese Fries</div>
          <div id="recipe-image">
            <img src="images/chickenfries.jpg" alt="fries" />
          </div>
          <div id="details">
            Calories: <span class="detail-value">590</span> | Protein:{" "}
            <span class="detail-value">55G</span> | Carbs:{" "}
            <span class="detail-value">49g</span> | Fat:{" "}
            <span class="detail-value">18G</span>
          </div>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <br></br>
            <br></br>
            <ul class="checkmark">
              <li>225g Russet Potatoes</li>
              <li>8oz Ground Chicken</li>
              <li>35g Fat Free Cheddar</li>
              <li>2 Tbsp Fat Free Ranch</li>
              <li>BBQ/Seasoning of Choice</li>
            </ul>
          </div>
          <div id="method">
            <span class="card-item-title">Directions</span>
            <br></br>
            <br></br>
            <ol>
              <li>
                Take the potatoes, slice them into fry shape and soak in ice
                water for 10 minutes.
              </li>
              <li>
                Pat the potatoes dry, throw in air fryer with BBQ seasoning and
                Avacado Oil for 18 minutes at 400 degrees.
              </li>
              <li>
                Cook ground chicken and add BBQ seasoning. Add the chicken along
                with the cheese to the air fryer with the fries and cook for
                another minute.
              </li>
              <li>Dish onto a plate and top with fat free ranch.</li>
              <li>Enjoy!</li>
            </ol>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default ChickenCheeseFries;
