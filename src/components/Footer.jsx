import React, { useState } from "react";

const Footer = () => {
  const [motivationalQuote, setMotivationalQuote] = useState(
    "Close your eyes & imagine yourself struttin' your stuff in your new firm fit fabulous body!"
  );

  //   function handleClickFooter() {
  //     fetch("https://api.quotable.io/random")
  //       .then((res) => res.json())
  //       .then((data) => setMotivationalQuote(data.content))
  //       .catch((err) => {
  //         console.log("Error fetching motivational quote:", err);
  //         setMotivationalQuote("Failed to load quote.");
  //       });
  //   }
  function handleClickFooter() {
    setMotivationalQuote("Only YOU have the power to sculpt your body!");
  }

  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          <button className="footer-btn" onClick={handleClickFooter}>
            Click if you would like a Motivational Quote:
          </button>
          <h3>"{motivationalQuote}"</h3>
        </div>
      </div>
      <h6>Thanks to: https://weighttraining.guide for the images.</h6>
    </>
  );
};

export default Footer;
