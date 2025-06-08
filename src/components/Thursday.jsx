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
      <h2>Today is Chest and Back day</h2>

      <form>
        <div className="exercise-container">
          <h3>
            Chest: <span>Flyes</span>
          </h3>
          {/* another good exercise is the Dumbbell face pulls */}
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="chestWeights"
                value={formData.chestWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateChestWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedThursChestWeights}`} </p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="chestReps"
                value={formData.chestReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateChestReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedThursChestReps}`} </p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/dumbbell-fly-resized.png"
          alt="person performing the dumbbell fly which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Back: <span>Bent-Over Reverse Flyes</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="backWeights"
                value={formData.backWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateBackWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedThursBackWeights}`} </p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="backReps"
                value={formData.backReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateBackReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedThursBackReps}`} </p>
        </div>
        <img
          className="exercise-img"
          src="https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Rear-Lateral-Raise-resized.png"
          alt="person performing the bent-over dumbbell reverse fly which shows which muscles are being used"
        />
      </form>
    </div>
  );
};

export default Thursday;
