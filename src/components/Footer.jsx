import React, { useState } from "react";
import data from "../motivation.js";

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

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomItem = data[randomIndex];

  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          {/* <h3>"{motivationalQuote}"</h3> */}
          <h3>{randomItem}</h3>
        </div>
      </div>
      <h6>Thanks to: https://weighttraining.guide for the images.</h6>
    </>
  );
};

export default Footer;
