import React from "react";
import search from "../../assets/search.svg";
import "./Cards.css";

function Cards({ apiData, handleIngredients }) {
  //console.log(apiData);

  return (
    <div className="main_conatiner">
      {apiData.length === 0 ? (
        <div className="nodata">
          <img src={search} alt="logo" className="nodata_img" />
          <p style={{ fontSize: "2rem", fontWeight: "700" }}>Search Recipe</p>
        </div>
      ) : (
        apiData.map((dish, key) => {
          return (
            <div className="card_con" key={key}>
              <div className="card_image">
                <img src={dish.recipe.image} alt="img" className="card_img" />
              </div>
              <span className="iteam_title">{dish.recipe.label}</span>
              <span className="nutrients_con">
                <span className="nutrients">Nutrients</span>
                <span className="nutrients_det">
                  <span>Energy</span>
                  <span>Protein</span>
                  <span>Fat</span>
                  <span>Carbs</span>
                </span>
                <span className="nutrients_det_ans">
                  <span>
                    {Math.trunc(dish.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                    kcal
                  </span>
                  <span>
                    {Math.trunc(dish.recipe.totalNutrients.PROCNT.quantity)} g
                  </span>
                  <span>
                    {Math.trunc(dish.recipe.totalNutrients.FAT.quantity)} g
                  </span>
                  <span>
                    {Math.trunc(dish.recipe.totalNutrients.CHOCDF.quantity)} g
                  </span>
                </span>
              </span>
              <span
                className="ingredients"
                onClick={() =>
                  handleIngredients(
                    dish.recipe.label,
                    dish.recipe.ingredientLines,
                    dish.recipe.url
                  )
                }
              >
                Ingredients
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cards;
