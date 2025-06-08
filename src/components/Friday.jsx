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

      <form>
        <div className="exercise-container">
          <h3>
            Biceps: <span>Alternate curls</span>
          </h3>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weight amount in kg"
                onChange={handleChange}
                name="biWeights"
                value={formData.biWeights}
              />
            </label>
            <button
              className="form-button"
              onClick={handleUpdateBiWeights}
              type="button"
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedFriBiWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                onChange={handleChange}
                name="biReps"
                value={formData.biReps}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateBiReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedFriBiReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Seated-Alternating-dumbbell-Curl.png"
          alt="person performing the seated alternating dumbbell curl which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Triceps: <span>Alternating Extension</span>
          </h3>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weight amount in kg"
                onChange={handleChange}
                name="triWeights"
                value={formData.triWeights}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateTriWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedFriTriWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                onChange={handleChange}
                name="triReps"
                value={formData.triReps}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateTriReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedFriTriReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/05/Lying-alternating-dumbbell-triceps-extension.png"
          alt="person performing the lying alternating dumbell triceps extension which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Shoulders: <span>Upright Row</span>
          </h3>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weight amount in kg"
                onChange={handleChange}
                name="shoulderWeights"
                value={formData.shoulderWeights}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateShoulderWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedFriShoulderWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                onChange={handleChange}
                name="shoulderReps"
                value={formData.shoulderReps}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateShoulderReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedFriShoulderReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2019/03/Dumbbell-wide-grip-upright-row-resized.png"
          alt="person performing the dumbbell wide-grip upright row which shows which muscles are being used"
        />
      </form>
    </div>
  );
};

export default Friday;
