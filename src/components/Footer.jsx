import React from "react";
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

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          {/* <h3>"{motivationalQuote}"</h3> */}
          <h3>{randomItem}</h3>
        </div>
      </div>
      <small>
        Thanks to: https://weighttraining.guide for the images. &copy;
        {currentYear} Barbara Ward. All rights reserved.
      </small>
    </>
  );
};

export default Footer;
