import React, { useState, useEffect } from "react";
import "../workoutStyle.css";

const Monday = () => {
  const [formData, setFormData] = useState({
    chestWeights: "",
    chestReps: "",
    backWeights: "",
    backReps: "",
  });

  // const [savedMonChestWeights, setSavedMonChestWeights] = useState(
  //   localStorage.getItem("savedMonChestWeights")
  // );
  // const [savedMonChestReps, setSavedMonChestReps] = useState(
  //   localStorage.getItem("savedMonChestReps")
  // );

  // const [savedMonBackWeights, setSavedMonBackWeights] = useState(
  //   localStorage.getItem("savedMonBackWeights")
  // );
  // const [savedMonBackReps, setSavedMonBackReps] = useState(
  //   localStorage.getItem("savedMonBackReps")
  // );

  // const [savedMonChestWeights, setSavedMonChestWeights] = useState("");
  // const [savedMonChestReps, setSavedMonChestReps] = useState("");
  // const [savedMonBackWeights, setSavedMonBackWeights] = useState("");
  // const [savedMonBackReps, setSavedMonBackReps] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("mondayFormData", JSON.stringify(newData));
      return newData;
    });
  }

  // function handleUpdateChestWeights() {
  //   localStorage.setItem("savedMonChestWeights", formData.chestWeights);
  //   setSavedMonChestWeights(formData.chestWeights);
  //   // setFormData((prev) => ({ ...prev, chestWeights: "" }));
  // }

  // function handleUpdateChestReps() {
  //   localStorage.setItem("savedMonChestReps", formData.chestReps);
  //   setSavedMonChestReps(formData.chestReps);
  //   // setFormData((prev) => ({ ...prev, chestReps: "" }));
  // }

  // function handleUpdateBackWeights() {
  //   localStorage.setItem("savedMonBackWeights", formData.backWeights);
  //   setSavedMonBackWeights(formData.backWeights);
  //   // setFormData((prev) => ({ ...prev, backWeights: "" }));
  // }

  // function handleUpdateBackReps() {
  //   localStorage.setItem("savedMonBackReps", formData.backReps);
  //   setSavedMonBackReps(formData.backReps);
  //   // setFormData((prev) => ({ ...prev, backReps: "" }));
  // }

  // useEffect(() => {
  //   setSavedMonChestWeights(localStorage.getItem("savedMonChestWeights") || "");
  //   setSavedMonChestReps(localStorage.getItem("savedMonChestReps") || "");
  //   setSavedMonBackWeights(localStorage.getItem("savedMonBackWeights") || "");
  //   setSavedMonBackReps(localStorage.getItem("savedMonBackReps") || "");
  // }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mondayFormData")) || {
      chestWeights: "",
      chestReps: "",
      backWeights: "",
      backReps: "",
    };
    console.log("Loaded saved data", saved);

    setFormData(saved);
  }, []);

  function handleUpdate() {
    console.log("Saving form data:", formData);
    localStorage.setItem("mondayFormData", JSON.stringify(formData));
  }

  return (
    <div className="weekday-component-container">
      <h1>Mega Muscle Monday!</h1>
      <h2>Today is Chest and Back day</h2>

      <form>
        <div className="exercise-container">
          <h3>
            Chest: <span>Bench Press</span>
          </h3>
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
              // onClick={handleUpdateChestWeights}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          {/* <p>{`Weights: ${savedMonChestWeights}`} </p> */}
          <p>{`Weights: ${formData.chestWeights}`} </p>

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
              // onClick={handleUpdateChestReps}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          {/* <p>{`Reps: ${savedMonChestReps}`} </p> */}
          <p>{`Reps: ${formData.chestReps}`} </p>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png"
          alt="person performing the dumbbell bench press which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Back: <span>Bent-over Rows</span>
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
              // onClick={handleUpdateBackWeights}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          {/* <p>{`Weights: ${savedMonBackWeights}`} </p> */}
          <p>{`Weights: ${formData.backWeights}`} </p>

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
              // onClick={handleUpdateBackReps}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          {/* <p>{`Reps: ${savedMonBackReps}`} </p> */}
          <p>{`Reps: ${formData.backReps}`} </p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png"
          alt="person performing the bent over one arm dumbbell row which shows which muscles are being used"
        />
      </form>
    </div>
  );
};

export default Monday;
