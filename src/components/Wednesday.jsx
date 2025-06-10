import React, { useState } from "react";

const Wednesday = () => {
  const [formData, setFormData] = useState({
    lungeWeights: "",
    lungeReps: "",
    squatWeights: "",
    squatReps: "",
    jkAbs: "",
    vupAbs: "",
    hipRaiseAbs: "",
  });
  const [savedLungeWeights, setSavedLungeWeights] = useState(
    localStorage.getItem("savedLungeWeights") || ""
    // we set it to "" inscase there is nothing in localStorage
  );
  const [savedLungeReps, setSavedLungeReps] = useState(
    localStorage.getItem("savedLungeReps") || ""
  );
  const [savedSquatWeights, setSavedSquatWeights] = useState(
    localStorage.getItem("savedSquatWeights") || ""
  );
  const [savedSquatReps, setSavedSquatReps] = useState(
    localStorage.getItem("savedSquatReps")
  );
  const [savedJkAbs, setSavedJkAbs] = useState(
    localStorage.getItem("savedJkAbs") || ""
  );
  const [savedVupAbs, setSavedVupAbs] = useState(
    localStorage.getItem("savedVupAbs") || ""
  );
  const [savedHipRaiseAbs, setSavedHipRaiseAbs] = useState(
    localStorage.getItem("savedHipRaiseAbs") || ""
  );

  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleLungeWeights() {
    localStorage.setItem("savedLungeWeights", formData.lungeWeights);
    setSavedLungeWeights(formData.lungeWeights);
    setFormData((prev) => ({ ...prev, lungeWeights: "" }));
    // to clear out the input field
  }

  function handleLungeReps() {
    localStorage.setItem("savedLungeReps", formData.lungeReps);
    setSavedLungeReps(formData.lungeReps);
    setFormData((prev) => ({ ...prev, lungeReps: "" }));
  }
  function handleSquatWeights() {
    localStorage.setItem("savedSquatWeights", formData.squatWeights);
    setSavedSquatWeights(formData.squatWeights);
    setFormData((prev) => ({ ...prev, squatWeights: "" }));
  }

  function handleSquatReps() {
    localStorage.setItem("savedSquatReps", formData.squatReps);
    setSavedSquatReps(formData.squatReps);
    setFormData((prev) => ({ ...prev, squatReps: "" }));
  }

  function handleJkAbs() {
    localStorage.setItem("savedJkAbs", formData.jkAbs);
    setSavedJkAbs(formData.jkAbs);
    setFormData((prev) => ({ ...prev, jkAbs: "" }));
  }
  function handleVupAbs() {
    localStorage.setItem("savedVupAbs", formData.vupAbs);
    setSavedVupAbs(formData.vupAbs);
    setFormData((prev) => ({ ...prev, vupAbs: "" }));
  }
  function handleHipRaiseAbs() {
    localStorage.setItem("savedHipRaiseAbs", formData.hipRaiseAbs);
    setSavedHipRaiseAbs(formData.hipRaiseAbs);
    setFormData((prev) => ({ ...prev, hipRaiseAbs: "" }));
  }

  return (
    <div className="weekday-component-container">
      <h1>Workhorse Wednesday!</h1>
      <h2>Legs, Glutes & Abs</h2>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes:<span>Lunge Walk</span>
          </h3>
          <p>
            Make sure your knee does NOT push forward past your toe. It should
            be in line with your ankle. As soon as you take the step forward
            bring your body downwards not forwards and push up though your front
            heel.
          </p>
          <div className="input-btn-container">
            <label htmlFor="lungeWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 8kgs"
              name="lungeWeights"
              value={formData.lungeWeights}
              onChange={handleChange}
              id="lungeWeights"
            />
          </div>

          <button
            type="button"
            onClick={handleLungeWeights}
            className="save-to-progress-history-button"
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label html="lungeReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 2 sets of 10"
              name="lungeReps"
              value={formData.lungeReps}
              onChange={handleChange}
              id="lungeReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleLungeReps}
          >
            Save to Progress History
          </button>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/11/Lunge-resized.png"
          alt="person performing the lunge which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes:<span>Squats</span>
          </h3>
          <p>
            Sit back as if you are going to sit in a chair. Keep your knees
            inline with your ankles. Push up through your heels.
          </p>
          <div className="input-btn-container">
            <label htmlFor="squatWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 8kg"
              name="squatWeights"
              value={formData.squatWeights}
              onChange={handleChange}
              id="squatWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSquatWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="squatReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 10, 6 hold for 6, 8"
              name="squatReps"
              value={formData.squatReps}
              onChange={handleChange}
              id="squatReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSquatReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/dumbbell-squat-resized-FIXED.png"
          alt="person performing the dumbbell squat which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Jack-Knife Sit-Ups</span>
          </h3>
          <p>
            This is a great exercise to target all the parts of your abdominals.
          </p>
          <div className="input-btn-container">
            <label htmlFor="jkAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="jkAbs"
              value={formData.jkAbs}
              onChange={handleChange}
              id="jkAbs"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleJkAbs}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Jackknife-sit-up.png"
          alt="person performing the jackknife sit-up which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Bent-Knee Oblique V-Ups</span>
          </h3>
          <p>
            Keep your neck stiff. As if there was a string attached to your head
            and it is pulling you up.
          </p>
          <div className="input-btn-container">
            <label htmlFor="vupAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="vupAbs"
              value={formData.vupAbs}
              onChange={handleChange}
              id="vupAbs"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleVupAbs}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/08/bent-knee-oblique-v-up-resized.png"
          alt="person performing the bent-knee oblique v-up which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Straight leg hip raise</span>
          </h3>
          <p>
            This exercise can also be done on the floor. You could cross your
            arms in front of you to make sure your don't cheat. You can start
            with your feet up and lift your bum off the floor.
          </p>
          <div className="input-btn-container">
            <label htmlFor="hipRaiseAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="hipRaiseAbs"
              value={formData.hipRaiseAbs}
              onChange={handleChange}
              id="hipRaiseAbs"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleHipRaiseAbs}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/incline-straight-leg-hip-raise-resized.png"
          alt="person performing the inclinde straight-let hip-raise which shows which muscles are being used"
        />
      </div>
      <button className="check-progress-history-button">
        Check Progress History
      </button>
    </div>
  );
};

export default Wednesday;
