import React from "react";
import "../workoutStyle.css";

const Nav = ({ selectedDay, handleClick }) => {
  return (
    <div className="main-container">
      <div className="nav">
        <button
          className={selectedDay === "Mon" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Mon
        </button>
        <button
          className={selectedDay === "Tues" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Tues
        </button>
        <button
          className={selectedDay === "Weds" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Weds
        </button>
        <button
          className={selectedDay === "Thurs" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Thurs
        </button>
        <button
          className={selectedDay === "Fri" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Fri
        </button>
        <button
          className={selectedDay === "Sat" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Sat
        </button>
        <button
          className={selectedDay === "Sun" ? "active-nav-btn" : ""}
          onClick={handleClick}
        >
          Sun
        </button>
      </div>
    </div>
  );
};

export default Nav;
