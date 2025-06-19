import React, { useState, useEffect } from "react";
import "../workoutStyle.css";
import InterestingThings from "./InterestingThings";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { formatDate } from "../utils/formatDate";

const Thursday = () => {
  const [inputData, setInputData] = useState({
    chestWeights: "",
    chestReps: "",
    backWeights: "",
    backReps: "",
  });

  const [progressHistory, setProgressHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("thursdayData", JSON.stringify(newData));
      return newData;
    });
  }
  // this is to load saved data from localStorage on first render
  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("thursdayData")) || {
      chestWeights: "",
      chestReps: "",
      backWeights: "",
      backReps: "",
    };
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("thursdayProgressHistory")) || [];
    setProgressHistory(savedHistory);
  }, []);

  function handleSaveToProgressHistory() {
    const timestamp = formatDate(new Date());
    const newEntries = [];

    if (inputData.chestWeights.trim() && inputData.chestReps.trim()) {
      newEntries.push({
        exercise: "Chest",
        value: `${inputData.chestWeights} - ${inputData.chestReps}`,
        date: timestamp,
      });
    }

    if (inputData.backWeights.trim() && inputData.backReps.trim()) {
      newEntries.push({
        exercise: "Back",
        value: `${inputData.backWeights} - ${inputData.backReps}`,
        date: timestamp,
      });
    }

    if (newEntries.length === 0) {
      alert("Please fill in both weights and Reps for a least one exercise");
    }

    const newHistory = [...progressHistory, ...newEntries];
    setProgressHistory(newHistory);
    localStorage.setItem("thursdayProgressHistory", JSON.stringify(newHistory));
  }

  function handleCheckProgressHistory() {
    setShowHistory((prev) => !prev);
  }

  function confirmDeleteEntry() {
    const updatedHistory = progressHistory.filter(
      (_, index) => index !== entryToDelete
    ); // so keep everything EXCEPT the one we are clicking on
    setProgressHistory(updatedHistory);
    localStorage.setItem(
      "thursdayProgressHistory",
      JSON.stringify(updatedHistory)
    );
    setShowModal(false);
    setEntryToDelete(null);
  }

  return (
    <div className="weekday-component-container">
      <h1>Thunder Thursday!</h1>
      <h2>Chest & Back</h2>
      <InterestingThings />

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Chest: <span>Flyes</span>
          </h3>
          <p>This will help good posture. Feel the burn!</p>
          <div className="input-btn-container">
            <label htmlFor="chestWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="chestWeights"
              value={inputData.chestWeights}
              onChange={handleChange}
              id="chestWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="chestReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="chestReps"
              value={inputData.chestReps}
              onChange={handleChange}
              id="chestReps"
            />
          </div>
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
              value={inputData.backWeights}
              onChange={handleChange}
              id="backWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="backReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="backReps"
              value={inputData.backReps}
              onChange={handleChange}
              id="backReps"
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
          src="https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Rear-Lateral-Raise-resized.png"
          alt="person performing the bent-over dumbbell reverse fly which shows which muscles are being used"
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

export default Thursday;
