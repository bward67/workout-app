import React, { useState, useEffect, useRef } from "react";
import InterestingThings from "./InterestingThings";

const Saturday = () => {
  const [fun, setFun] = useState("");
  const [message, setMessage] = useState(""); // message to animate
  const [animationKey, setAnimationKey] = useState(0); // unique per bounce

  const messageRef = useRef(null);

  function handleChange(e) {
    setFun(e.target.value);
  }

  useEffect(() => {
    if (!fun) return;

    const delay = setTimeout(() => {
      setMessage(fun);
      setAnimationKey(Date.now());
    }, 1500); // Wait 1500ms after user stops typing
    //do a cleanup function to stop it once its done
    return () => clearTimeout(delay);
  }, [fun]);

  // console.log(fun[0].toUpperCase());
  // console.log(fun.slice(0, 1));

  //Trigger animation when debouncedFun changes
  useEffect(() => {
    const el = messageRef.current;
    if (el) {
      el.classList.remove("animate");

      // Force reflow before re-adding class / forces a browser reflow, so removing + re-adding the class actually triggers the animation again
      void el.offsetWidth;
      el.classList.add("animate");
    }
  }, [animationKey]);

  function handleSubmit(e) {
    e.preventDefault();
    if (fun.trim() === "") return;
    setMessage(fun.charAt(0).toUpperCase() + fun.slice(1).toLowerCase()); //
    setAnimationKey(Date.now());
    setFun("");
  }

  // Force restart animation every time message changes
  useEffect(() => {
    const el = messageRef.current;
    if (el) {
      el.classList.remove("animate");
      void el.offsetWidth; // trigger reflow
      el.classList.add("animate");
    }
  }, [animationKey]);

  return (
    <div className="weekday-component-container">
      <h1>Soothing Saturday!</h1>
      <h2 className="sat-message">Go on and enjoy a well deserved day off.</h2>
      <h2 className="sat-message">You have been working hard! 😊</h2>

      <form onSubmit={handleSubmit}>
        <label>
          What are you planning to do today?
          <input
            type="text"
            placeholder="It better be something fun"
            name="fun"
            value={fun}
            onChange={handleChange}
          />
        </label>
      </form>
      {/* <data value=""></data> */}
      {message && (
        <h2
          key={animationKey}
          ref={messageRef}
          style={{ color: "blueviolet" }}
          className="animate"
        >
          "{message}" DOES sound like fun. Enjoy every second!
        </h2>
      )}
      <div className="sat-interesting-things">
        <InterestingThings />
      </div>
    </div>
  );
};

export default Saturday;
