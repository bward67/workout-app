import React from "react";
import recipeData from "../healthyRecipe.js";

const HealthyRecipeModal = ({ setShowHealthyRecipe }) => {
  //console.log(recipeData);

  function handleCloseModal() {
    setShowHealthyRecipe(false);
  }

  return (
    <div className="healthy-recipe-modal">
      <div className="healthy-recipe-content">
        <button className="close-modal" onClick={handleCloseModal}>
          &#10006;
        </button>
        <h3>{recipeData[3].name}</h3>
        <ul>
          Ingredients:
          {recipeData[3].ingredients.map((item, index) => {
            return (
              <li key={index} className="recipe-ingredients">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="recipe-instructions">
          Instructions: {recipeData[3].method}{" "}
        </p>
        <p> Calories: {recipeData[3].calories}</p>
      </div>
    </div>
  );
};

export default HealthyRecipeModal;
