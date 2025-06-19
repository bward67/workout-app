import React from "react";
import recipeData from "../healthyRecipe.js";

const HealthyRecipeModal = ({ setShowHealthyRecipe }) => {
  //console.log(recipeData);
  const randomIndex = Math.floor(Math.random() * recipeData.length);
  const randomRecipe = recipeData[randomIndex];
  // console.log(randomRecipe);

  function handleCloseModal() {
    setShowHealthyRecipe(false);
  }

  return (
    <div className="healthy-recipe-modal">
      <div className="healthy-recipe-content">
        <button className="close-modal" onClick={handleCloseModal}>
          &#10006;
        </button>
        {randomRecipe && (
          <div className="recipe-card">
            {/* <img src={randomRecipe.image} alt={randomRecipe.title} /> */}
            <h3>{randomRecipe.name}</h3>

            <p className="recipe-sml-headings">Ingredients:</p>
            <ul className="recipe-ingredients">
              {randomRecipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p className="recipe-sml-headings">Instructions: </p>
            <p>{randomRecipe.method}</p>
            <p className="recipe-sml-headings">Calories:</p>
            <p>{randomRecipe.calories}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthyRecipeModal;
