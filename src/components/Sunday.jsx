import React, { useState, useEffect } from "react";
import InterestingThings from "./InterestingThings";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";

const Sunday = () => {
  const [inputData, setInputData] = useState({
    squatWeights: "",
    squatReps: "",
    hipThrustWeights: "",
    hipThrustReps: "",
    crunchAbsReps: "",
    kneeTuckAbsReps: "",
    scissorKickAbsReps: "",
  });

  const [progressHistory, setProgressHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("sundayData", JSON.stringify(newData));
      return newData;
    });
  }

  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("sundayData")) || {
      squatWeights: "",
      squatReps: "",
      hipThrustWeights: "",
      hipThrustReps: "",
      crunchAbsReps: "",
      kneeTuckAbsReps: "",
      scissorKickAbsReps: "",
    };
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("sundayProgressHistory")) || [];

    setProgressHistory(savedHistory);
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  //! I want the user to click on the Check Progress btn and have a pop up which shows what dates they changed/input weights and reps for a certain exercise
  //? we can get the timestamp of when the user clicked the button and save it to localStorage - which we can then retrieve later

  //! BUT lets set this up to Toggle on and off
  function handleSaveToProgressHistory() {
    const timestamp = formatDate(new Date());
    const newEntries = [];

    if (inputData.squatWeights.trim() && inputData.squatReps.trim()) {
      newEntries.push({
        exercise: "Bul Squats",
        value: `${inputData.squatWeights} - ${inputData.squatReps}`,
        date: timestamp,
      });
    }
    if (inputData.hipThrustWeights.trim() && inputData.hipThrustReps.trim()) {
      newEntries.push({
        exercise: "Hip Thrusts",
        value: `${inputData.hipThrustWeights} - ${inputData.hipThrustReps} `,
        date: timestamp,
      });
    }
    if (inputData.crunchAbsReps.trim()) {
      newEntries.push({
        exercise: "Crunch Abs",
        value: inputData.crunchAbsReps,
        date: timestamp,
      });
    }
    if (inputData.kneeTuckAbsReps.trim()) {
      newEntries.push({
        exercise: "Knee Tuck Abs",
        value: inputData.kneeTuckAbsReps,
        date: timestamp,
      });
    }
    if (inputData.scissorKickAbsReps.trim()) {
      newEntries.push({
        exercise: "Scissor Kick Abs",
        value: inputData.scissorKickAbsReps,
        date: timestamp,
      });
    }
    if (newEntries.length === 0) {
      alert("Please fill in both Weights and Reps for at least one exercise.");
    }
    const newHistory = [...progressHistory, ...newEntries];
    setProgressHistory(newHistory);
    localStorage.setItem("sundayProgressHistory", JSON.stringify(newHistory));
  }

  function handleCheckProgressHistory() {
    setShowHistory((prev) => !prev);
  }

  function confirmDeleteEntry() {
    const updatedHistory = progressHistory.filter(
      (_, index) => index !== entryToDelete
    );
    setProgressHistory(updatedHistory);
    localStorage.setItem(
      "sundayProgressHistory",
      JSON.stringify(updatedHistory)
    );
    setShowModal(false);
    setEntryToDelete(null);
  }

  return (
    <div className="weekday-component-container">
      <h1>Super Strength Sunday!</h1>
      <h2>Legs, Glutes & Abs</h2>
      <InterestingThings />
      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes: <span>Bulgarian Split Squats</span>
          </h3>
          <p>
            Those Bulgarians showed no mercy when they invented this exercise!
            Push up through your heel. You WILL feel it!
          </p>

          <div className="input-btn-container">
            <label htmlFor="squatWeights">Weights: </label>
            <input
              type="text"
              placeholder="ex. 5kgs"
              name="squatWeights"
              value={inputData.squatWeights}
              onChange={handleChange}
              id="squatWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="squatReps">Reps: </label>
            <input
              type="text"
              placeholder="number of sets & reps"
              name="squatReps"
              value={inputData.squatReps}
              onChange={handleChange}
              id="squatReps"
            />
          </div>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png"
          alt="person performing the bulgarian split squat which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes:
            <span>Hip Thrust</span>
          </h3>
          <p>
            You can take a heavy weight with this exercise. Get your back
            comfortable on the bench and push up through your heels.
          </p>

          <div className="input-btn-container">
            <label htmlFor="hipThrustWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 20kg"
              name="hipThrustWeights"
              value={inputData.hipThrustWeights}
              onChange={handleChange}
              id="hipThrustWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="hipThrustReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 20"
              name="hipThrustReps"
              value={inputData.hipThrustReps}
              onChange={handleChange}
              id="hipThrustReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png"
          alt="person performing the barbell hip thrust which shows which muscles are being used"
        />
      </div>
      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Long Arm Crunch</span>
          </h3>

          <div className="input-btn-container">
            <label htmlFor="crunchAbsReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="crunchAbsReps"
              value={inputData.crunchAbsReps}
              onChange={handleChange}
              id="crunchAbsReps"
            />
          </div>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/07/Long-arm-crunch.png"
          alt="person performing the long arm crunch which shows which muscles are being used"
        />
      </div>
      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Alternating Knee Tuck</span>
          </h3>

          <div className="input-btn-container">
            <label htmlFor="kneeTuckAbsReps"></label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="kneeTuckAbsReps"
              value={inputData.kneeTuckAbsReps}
              onChange={handleChange}
              id="kneeTuckAbsReps"
            />
          </div>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/06/Seated-alternating-knee-tuck.png"
          alt="person performing the setaed alternating knee tuck which shows which muscles are being used"
        />
      </div>
      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Cross Scissor Kick</span>
          </h3>

          <div className="input-btn-container">
            <label htmlFor="scissorKickAbsReps"></label>
            <input
              type="text"
              placeholder="3 sets of 10"
              name="scissorKickAbsReps"
              value={inputData.scissorKickAbsReps}
              onChange={handleChange}
              id="scissorKickAbsReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSaveToProgressHistory}
          >
            Save to progress History
          </button>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/05/Seated-cross-scissor-kick.png"
          alt="person performing the seated cross-scissor kick which shows which muscles are being used"
        />
      </div>
      <button
        className="check-progress-history-button"
        onClick={handleCheckProgressHistory}
      >
        Check Progress History
      </button>
      {/* display the progress History */}

      {showHistory && progressHistory.length > 0 && (
        <div className="progress-history">
          <h3>Progress History</h3>
          <ul>
            {progressHistory.map((entry, index) => (
              <li key={index}>
                <div className="progress-history-list-item">
                  <p>{entry.exercise}</p>
                  <p>{entry.value}</p>
                  <p>{entry.date}</p>
                  <TbTrashXFilled
                    className="trash-icon"
                    onClick={() => {
                      setEntryToDelete(index);
                      setShowModal(true);
                    }}
                    title="Delete entry"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showModal && (
        <ConfirmDeleteModal
          isOpen={showModal}
          message="Are you sure you want to delete this entry?"
          onConfirm={confirmDeleteEntry}
          onCancel={() => {
            setShowModal(false);
            setEntryToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default Sunday;
