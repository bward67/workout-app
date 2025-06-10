import React from "react";
import InterestingThings from "./InterestingThings";

const TitlePage = () => {
  return (
    <div className="title-container">
      <h1>Make today's workout EPIC!</h1>
      <h2>Select the day</h2>
      {/* I might remove this one as it may be too many things on the title screen */}
      <InterestingThings />
    </div>
  );
};

export default TitlePage;
