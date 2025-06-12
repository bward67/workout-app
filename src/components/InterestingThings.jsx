import React from "react";
import data from "../nutrition.js";

const InterestingThings = () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomItem = data[randomIndex];
  // console.log(randomIndex);
  //console.log(data[randomIndex].food);
  //console.log(randomItem); // we get the object with 2 keys
  return (
    <div className="interesting-things">
      <h5>Interesting Things...</h5>
      <h4>
        {randomItem.food}: <span>{randomItem.benefits}</span>
      </h4>
    </div>
  );
};

export default InterestingThings;
