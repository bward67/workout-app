import React, { useState } from "react";
import TitlePage from "./components/TitlePage";
import Monday from "./components/Monday";
import Tuesday from "./components/Tuesday";
import Wednesday from "./components/Wednesday";
import Thursday from "./components/Thursday";
import Friday from "./components/Friday";
import Saturday from "./components/Saturday";
import Sunday from "./components/Sunday";
import "./workoutStyle.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  const [selectedDay, setSelectedDay] = useState("");

  function handleClick(e) {
    //console.log(e.target.textContent);
    const day = e.target.textContent;
    setSelectedDay(day);
    // console.log(day);
    //! scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const renderDayComponent = () => {
    switch (selectedDay) {
      case "Mon":
        return <Monday />;
      case "Tues":
        return <Tuesday />;
      case "Weds":
        return <Wednesday />;
      case "Thurs":
        return <Thursday />;
      case "Fri":
        return <Friday />;
      case "Sat":
        return <Saturday />;
      case "Sun":
        return <Sunday />;
      default:
        return <TitlePage />;
    }
  };
  return (
    <div className="main-container">
      <Nav handleClick={handleClick} selectedDay={selectedDay} />
      <div className="components-container">{renderDayComponent()}</div>
      <Footer />
    </div>
  );
};

export default App;
