import { useState } from "react";
import data from "../motivation.js";
import HealthyRecipeModal from "./HealthyRecipeModal.jsx";

const Footer = () => {
  //   function handleClickFooter() {
  //     fetch("https://api.quotable.io/random")
  //       .then((res) => res.json())
  //       .then((data) => setMotivationalQuote(data.content))
  //       .catch((err) => {
  //         console.log("Error fetching motivational quote:", err);
  //         setMotivationalQuote("Failed to load quote.");
  //       });
  //   }

  const [showHealthyRecipe, setShowHealthyRecipe] = useState(false);

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomItem = data[randomIndex];

  const currentYear = new Date().getFullYear();

  //I want to get a modal to pop up with a random healthy recipe when the user clicks the button
  function handleHealthyRecipe() {
    setShowHealthyRecipe(true);
  }

  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          {/* <h3>"{motivationalQuote}"</h3> */}
          <h3>{randomItem}</h3>
          <button className="recipe-idea" onClick={handleHealthyRecipe}>
            Healthy Recipe
          </button>
        </div>
      </div>
      {showHealthyRecipe && (
        <HealthyRecipeModal setShowHealthyRecipe={setShowHealthyRecipe} />
      )}
      <small>
        Thanks to: https://weighttraining.guide for the images. &copy;
        {currentYear} Barbara Ward. All rights reserved.
      </small>
    </>
  );
};

export default Footer;
