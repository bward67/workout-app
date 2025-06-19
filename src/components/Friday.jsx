import React, { useState, useEffect } from "react";
import InterestingThings from "./InterestingThings";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { formatDate } from "../utils/formatDate";

const Friday = () => {
  const [inputData, setInputData] = useState({
    biWeights: "",
    biReps: "",
    triWeights: "",
    triReps: "",
    shoulderWeights: "",
    shoulderReps: "",
  });
  const [progressHistory, setProgressHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("fridayData", JSON.stringify(newData));
      return newData;
    });
  }

  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("fridayData")) || {
      biWeights: "",
      biReps: "",
      triWeights: "",
      triReps: "",
      shoulderWeights: "",
      shoulderReps: "",
    };
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("fridayProgressHistory")) || [];
    setProgressHistory(savedHistory);
  }, []);

  function handleSaveToProgressHistory() {
    const timestamp = formatDate(new Date());
    const newEntries = [];

    if (inputData.biWeights.trim() && inputData.biReps.trim()) {
      newEntries.push({
        exercise: "Biceps",
        value: `${inputData.biWeights} - ${inputData.biReps}`,
        date: timestamp,
      });
    }

    if (inputData.triWeights.trim() && inputData.triReps.trim()) {
      newEntries.push({
        exercise: "Triceps",
        value: `${inputData.triWeights} - ${inputData.triReps}`,
        date: timestamp,
      });
    }

    if (inputData.shoulderWeights.trim() && inputData.shoulderReps.trim()) {
      newEntries.push({
        exercise: "Shoulders",
        value: `${inputData.shoulderWeights} - ${inputData.shoulderReps}`,
        date: timestamp,
      });
    }
    if (newEntries.lenght === 0) {
      alert("Please fill in both Weights nad Reps for at least one exercise.");
    }

    const newHistory = [...progressHistory, ...newEntries];
    setProgressHistory(newHistory);
    localStorage.setItem("fridayProgressHistory", JSON.stringify(newHistory));
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
      "fridayProgressHistory",
      JSON.stringify(updatedHistory)
    );
    setShowModal(false);
    setEntryToDelete(null);
  }

  return (
    <div className="weekday-component-container">
      <h1>Fearless Friday!</h1>
      <h2>Biceps, Triceps & Shoulders</h2>
      <InterestingThings />

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
              value={inputData.biWeights}
              id="biWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="biReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              onChange={handleChange}
              name="biReps"
              value={inputData.biReps}
              id="biReps"
            />
          </div>
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
              value={inputData.triWeights}
              id="triWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="triReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              onChange={handleChange}
              name="triReps"
              value={inputData.triReps}
              id="triReps"
            />
          </div>
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
              value={inputData.shoulderWeights}
              id="shoulderWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="shoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              onChange={handleChange}
              name="shoulderReps"
              value={inputData.shoulderReps}
              id="shoulderReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSaveToProgressHistory}
          >
            Save to Progress History
          </button>
          <small>Only save if you have changes.</small>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2019/03/Dumbbell-wide-grip-upright-row-resized.png"
          alt="person performing the dumbbell wide-grip upright row which shows which muscles are being used"
        />
      </div>
      <button
        className="check-progress-history-button"
        onClick={handleCheckProgressHistory}
      >
        Check Progress History
      </button>

      {showHistory && progressHistory.length > 0 && (
        <div className="progress-history">
          <h3>Progress History</h3>
          <ul>
            {progressHistory.map((entry, index) => (
              <li key={index}>
                <div className="progress-history-list-item">
                  <p>{entry.exercise}:</p>
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

export default Friday;
