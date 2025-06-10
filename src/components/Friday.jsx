import React, { useState } from "react";

const Friday = () => {
  const [formData, setFormData] = useState({
    biWeights: "",
    biReps: "",
    triWeights: "",
    triReps: "",
    shoulderWeights: "",
    shoulderReps: "",
  });
  const [savedFriBiWeights, setSavedFriBiWeights] = useState(
    localStorage.getItem("savedFriBiWeights") || ""
  );
  const [savedFriBiReps, setSavedFriBiReps] = useState(
    localStorage.getItem("savedFriBiReps") || ""
  );
  const [savedFriTriWeights, setSavedFriTriWeights] = useState(
    localStorage.getItem("savedFriTriWeights") || ""
  );
  const [savedFriTriReps, setSavedFriTriReps] = useState(
    localStorage.getItem("savedFriTriReps")
  );
  const [savedFriShoulderWeights, setSavedFriShoulderWeights] = useState(
    localStorage.getItem("savedFriShoulderWeights")
  );
  const [savedFriShoulderReps, setSavedFriShoulderReps] = useState(
    localStorage.getItem("savedFriShoulderReps")
  );
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleUpdateBiWeights() {
    localStorage.setItem("savedFriBiWeights", formData.biWeights);
    setSavedFriBiWeights(formData.biWeights);
    //clear the input field
    setFormData((prev) => ({ ...prev, biWeights: "" }));
  }

  function handleUpdateBiReps() {
    localStorage.setItem("savedFriBiReps", formData.biReps);
    setSavedFriBiReps(formData.biReps);
    setFormData((prev) => ({ ...prev, biReps: "" }));
  }

  function handleUpdateTriWeights() {
    localStorage.setItem("savedFriTriWeights", formData.triWeights);
    setSavedFriTriWeights(formData.triWeights);
    setFormData((prev) => ({ ...prev, triWeights: "" }));
  }

  function handleUpdateTriReps() {
    localStorage.setItem("savedFriTriReps", formData.triReps);
    setSavedFriTriReps(formData.triReps);
    setFormData((prev) => ({ ...prev, triReps: "" }));
  }

  function handleUpdateShoulderWeights() {
    localStorage.setItem("savedFriShoulderWeights", formData.shoulderWeights);
    setSavedFriShoulderWeights(formData.shoulderWeights);
    setFormData((prev) => ({ ...prev, shoulderWeights: "" }));
  }
  function handleUpdateShoulderReps() {
    localStorage.setItem("savedFriShoulderReps", formData.shoulderReps);
    setSavedFriShoulderReps(formData.shoulderReps);
    setFormData((prev) => ({ ...prev, shoulderReps: "" }));
  }
  return (
    <div className="weekday-component-container">
      <h1>Fearless Friday!</h1>
      <h2>Biceps, Triceps & Shoulders</h2>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Biceps: <span>Alternate curls</span>
          </h3>
          <p>
            This exercise can be performed standing or sitting. Just be sure not
            to engage your back if you find the weight too heavy. It is better
            to lower the weight and get the right form.
          </p>

          <div className="input-btn-container">
            <label htmlFor="biWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              onChange={handleChange}
              name="biWeights"
              value={formData.biWeights}
              id="biWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            onClick={handleUpdateBiWeights}
            type="button"
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="biReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              onChange={handleChange}
              name="biReps"
              value={formData.biReps}
              id="biReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateBiReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Seated-Alternating-dumbbell-Curl.png"
          alt="person performing the seated alternating dumbbell curl which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Triceps: <span>Alternating Extension</span>
          </h3>
          <p>
            Feel the burn! Concentrate - don't hit your head with the dumbbells.
          </p>

          <div className="input-btn-container">
            <label htmlFor="triWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 3.5kg"
              onChange={handleChange}
              name="triWeights"
              value={formData.triWeights}
              id="triWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateTriWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="triReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              onChange={handleChange}
              name="triReps"
              value={formData.triReps}
              id="triReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateTriReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/05/Lying-alternating-dumbbell-triceps-extension.png"
          alt="person performing the lying alternating dumbell triceps extension which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Shoulders: <span>Upright Row</span>
          </h3>
          <p>Get those elbows up nice and high.</p>

          <div className="input-btn-container">
            <label htmlFor="shoulderWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 8kg"
              onChange={handleChange}
              name="shoulderWeights"
              value={formData.shoulderWeights}
              id="shoulderWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateShoulderWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="shoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              onChange={handleChange}
              name="shoulderReps"
              value={formData.shoulderReps}
              id="shoulderReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateShoulderReps}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2019/03/Dumbbell-wide-grip-upright-row-resized.png"
          alt="person performing the dumbbell wide-grip upright row which shows which muscles are being used"
        />
      </div>
      <button className="check-progress-history-button">
        Check Progress History
      </button>
    </div>
  );
};

export default Friday;
