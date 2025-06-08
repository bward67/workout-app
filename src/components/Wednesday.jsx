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

      <form>
        <div className="exercise-container">
          <h3>
            Legs & Glutes:<span>Lunge Walk</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weight amount in kgs"
                name="lungeWeights"
                value={formData.lungeWeights}
                onChange={handleChange}
              />
            </label>
            <button
              type="button"
              onClick={handleLungeWeights}
              className="form-button"
            >
              Update
            </button>
          </div>
          <p className="weights"> {`Weights: ${savedLungeWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="lungeReps"
                value={formData.lungeReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleLungeReps}
            >
              Update
            </button>
          </div>

          <p className="reps"> {`Reps: ${savedLungeReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/11/Lunge-resized.png"
          alt="person performing the lunge which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Legs & Glutes:<span>Squats</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weight amount"
                name="squatWeights"
                value={formData.squatWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleSquatWeights}
            >
              Update
            </button>
          </div>
          <p className="weights">{`Weights: ${savedSquatWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="squatReps"
                value={formData.squatReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleSquatReps}
            >
              Update
            </button>
          </div>
          <p className="reps">{`Reps: ${savedSquatReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/dumbbell-squat-resized-FIXED.png"
          alt="person performing the dumbbell squat which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Jack-Knife Sit-Ups</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="jkAbs"
                value={formData.jkAbs}
                onChange={handleChange}
              />
            </label>
            <button className="form-button" type="button" onClick={handleJkAbs}>
              Update
            </button>
          </div>
          <p>{`Reps: ${savedJkAbs}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Jackknife-sit-up.png"
          alt="person performing the jackknife sit-up which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Bent-Knee Oblique V-Ups</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="vupAbs"
                value={formData.vupAbs}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleVupAbs}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedVupAbs}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/08/bent-knee-oblique-v-up-resized.png"
          alt="person performing the bent-knee oblique v-up which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Straight leg hip raise</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="hipRaiseAbs"
                value={formData.hipRaiseAbs}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleHipRaiseAbs}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedHipRaiseAbs}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/incline-straight-leg-hip-raise-resized.png"
          alt="person performing the inclinde straight-let hip-raise which shows which muscles are being used"
        />
      </form>
    </div>
  );
};

export default Wednesday;
