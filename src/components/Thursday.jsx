import React, { useState } from "react";
import "../workoutStyle.css";

const Thursday = () => {
  const [formData, setFormData] = useState({
    chestWeights: "",
    chestReps: "",
    backWeights: "",
    backReps: "",
  });

  const [savedThursChestWeights, setSavedThursChestWeights] = useState(
    localStorage.getItem("savedThursChestWeights")
  );
  const [savedThursChestReps, setSavedThursChestReps] = useState(
    localStorage.getItem("savedThursChestReps")
  );

  const [savedThursBackWeights, setSavedThursBackWeights] = useState(
    localStorage.getItem("savedThursBackWeights")
  );
  const [savedThursBackReps, setSavedThursBackReps] = useState(
    localStorage.getItem("savedThursBackReps")
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdateChestWeights() {
    localStorage.setItem("savedThursChestWeights", formData.chestWeights);
    setSavedThursChestWeights(formData.chestWeights);
    setFormData((prev) => ({ ...prev, chestWeights: "" }));
  }

  function handleUpdateChestReps() {
    localStorage.setItem("savedThursChestReps", formData.chestReps);
    setSavedThursChestReps(formData.chestReps);
    setFormData((prev) => ({ ...prev, chestReps: "" }));
  }

  function handleUpdateBackWeights() {
    localStorage.setItem("savedThursBackWeights", formData.backWeights);
    setSavedThursBackWeights(formData.backWeights);
    setFormData((prev) => ({ ...prev, backWeights: "" }));
  }

  function handleUpdateBackReps() {
    localStorage.setItem("savedThursBackReps", formData.backReps);
    setSavedThursBackReps(formData.backReps);
    setFormData((prev) => ({ ...prev, backReps: "" }));
  }
  return (
    <div className="weekday-component-container">
      <h1>Thunder Thursday!</h1>
      <h2>Chest & Back</h2>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Chest: <span>Flyes</span>
          </h3>
          <p>Feel the burn!</p>
          <div className="input-btn-container">
            <label htmlFor="chestWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="chestWeights"
              value={formData.chestWeights}
              onChange={handleChange}
              id="chestWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateChestWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="chestReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="chestReps"
              value={formData.chestReps}
              onChange={handleChange}
              id="chestReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateChestReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/dumbbell-fly-resized.png"
          alt="person performing the dumbbell fly which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Back: <span>Bent-Over Reverse Flyes</span>
          </h3>
          <p>
            You can also perform this excercise while lying prone on a bench.
            Think about your back muscles as you squeeze up.
          </p>
          <div className="input-btn-container">
            <label htmlFor="backWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 8kg"
              name="backWeights"
              value={formData.backWeights}
              onChange={handleChange}
              id="backWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateBackWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="backReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="backReps"
              value={formData.backReps}
              onChange={handleChange}
              id="backReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateBackReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Rear-Lateral-Raise-resized.png"
          alt="person performing the bent-over dumbbell reverse fly which shows which muscles are being used"
        />
      </div>
      <button className="check-progress-history-button">
        Check Progress History
      </button>
    </div>
  );
};

export default Thursday;
