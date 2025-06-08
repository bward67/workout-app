import React, { useState } from "react";

const Sunday = () => {
  const [formData, setFormData] = useState({
    squatWeights: "",
    squatReps: "",
    hipThrustWeights: "",
    hipThrustReps: "",
    absReps: "",
  });

  console.log(formData);

  const [savedBSquatWeights, setSavedBSquatWeights] = useState(
    localStorage.getItem("savedBSquatWeights") || ""
  );
  const [savedBSquatReps, setSavedBSquatReps] = useState(
    localStorage.getItem("savedBSquatReps") || ""
  );
  const [savedHipThrustWeights, setSavedHipThrustWeights] = useState(
    localStorage.getItem("savedHipThrustWeights") || ""
  );
  const [savedHipThrustReps, setSavedHipThrustReps] = useState(
    localStorage.getItem("savedHipThrustReps") || ""
  );
  const [savedAbsReps, setSavedAbsReps] = useState(
    localStorage.getItem("savedAbsReps") || ""
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSquatWeights() {
    localStorage.setItem("savedBSquatWeights", formData.squatWeights);
    setSavedBSquatWeights(formData.squatWeights);
    setFormData((prev) => ({ ...prev, squatWeights: "" }));
  }

  function handleSquatReps() {
    localStorage.setItem("savedBSquatReps", formData.squatReps);
    setSavedBSquatReps(formData.squatReps);
    setFormData((prev) => ({ ...prev, squatReps: "" }));
  }

  function handleHipThrustWeights() {
    localStorage.setItem("savedHipThrustWeights", formData.hipThrustWeights);
    setSavedHipThrustWeights(formData.hipThrustWeights);
    setFormData((prev) => ({ ...prev, hipThrustWeights: "" }));
  }

  function handleHipThrustReps() {
    localStorage.setItem("savedHipThrustReps", formData.hipThrustReps);
    setSavedHipThrustReps(formData.hipThrustReps);
    setFormData((prev) => ({ ...prev, hipThrustReps: "" }));
  }

  function handleAbs() {
    console.log("soon");
    localStorage.setItem("savedAbsReps", formData.absReps);
    setSavedAbsReps(formData.absReps);
    setFormData((prev) => ({ ...prev, absReps: "" }));
  }

  function handleCheckProgress() {
    console.log(
      "this is where I will have an array of all updates ever made on this day of the week"
    );
  }
  return (
    <div className="weekday-component-container">
      <h1>Super Strength Sunday!</h1>
      <h2>Legs, Glutes & Abs</h2>

      <form>
        <div className="exercise-container">
          <h3>Bulgarian Split Squats:</h3>
          <div>
            <label>
              <input
                type="text"
                placeholder="weight amount in kgs"
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
          <p>{`Weights: ${savedBSquatWeights}kg`}</p>

          <div>
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                name="squatReps"
                value={formData.squatReps}
                onChange={handleChange}
              />
            </label>
            <button
              type="button"
              onClick={handleSquatReps}
              className="form-button"
            >
              Update
            </button>
          </div>
          <p className="reps">{`Reps: ${savedBSquatReps}`}</p>
        </div>
      </form>

      <form>
        <div className="exercise-container">
          <h3>Hip Thrust:</h3>
          <div>
            <label>
              <input
                type="text"
                placeholder="weight amount in kg"
                name="hipThrustWeights"
                value={formData.hipThrustWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleHipThrustWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedHipThrustWeights}kg`}</p>

          <div>
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                name="hipThrustReps"
                value={formData.hipThrustReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleHipThrustReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedHipThrustReps}`}</p>
        </div>
      </form>

      <form>
        <div className="exercise-container">
          <h3>3 Way Abs:</h3>
          <p>Upper, Obliques, Lower</p>

          <div>
            <label>
              <input
                type="text"
                placeholder="how many sets & reps"
                name="absReps"
                value={formData.absReps}
                onChange={handleChange}
              />
            </label>
            <button className="form-button" type="button" onClick={handleAbs}>
              Update
            </button>
          </div>
          <p>{`Reps: ${savedAbsReps}`}</p>
        </div>
      </form>
      <button className="progress-button" onClick={handleCheckProgress}>
        Check Progress
      </button>
    </div>
  );
};

export default Sunday;
