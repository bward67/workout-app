import { useState, useEffect } from "react";
import InterestingThings from "./InterestingThings";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";

const Tuesday = () => {
  const [inputData, setInputData] = useState({
    biWeights: "",
    biReps: "",
    triWeights: "",
    triReps: "",
    lateralShoulderWeights: "",
    lateralShoulderReps: "",
    frontShoulderWeights: "",
    frontShoulderReps: "",
    shoulderArnoldWeights: "",
    shoulderArnoldReps: "",
  });

  const [progressHistory, setProgressHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("tuesdayData", JSON.stringify(newData));
      return newData;
    });
  }

  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("tuesdayData")) || {
      biWeights: "",
      biReps: "",
      triWeights: "",
      triReps: "",
      lateralShoulderWeights: "",
      lateralShoulderReps: "",
      frontShoulderWeights: "",
      frontShoulderReps: "",
      shoulderArnoldWeights: "",
      shoulderArnoldReps: "",
    };
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("tuesdayProgressHistory")) || [];
    setProgressHistory(savedHistory);
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

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

    if (
      inputData.lateralShoulderWeights.trim() &&
      inputData.lateralShoulderReps.trim()
    ) {
      newEntries.push({
        exercise: "Shoulder Lat.",
        value: `${inputData.lateralShoulderWeights} - ${inputData.lateralShoulderReps}`,
        date: timestamp,
      });
    }

    if (
      inputData.frontShoulderWeights.trim() &&
      inputData.frontShoulderReps.trim()
    ) {
      newEntries.push({
        exercise: "Shoulder Front",
        value: `${inputData.frontShoulderWeights} - ${inputData.frontShoulderReps}`,
        date: timestamp,
      });
    }

    if (
      inputData.shoulderArnoldWeights.trim() &&
      inputData.shoulderArnoldReps.trim()
    ) {
      newEntries.push({
        exercise: "Shoulder Arnold",
        value: `${inputData.shoulderArnoldWeights} - ${inputData.shoulderArnoldReps}`,
        date: timestamp,
      });
    }

    if (newEntries.length === 0) {
      alert("Please fill in both Weights and Reps for at least one exercise.");
    }

    const newHistory = [...progressHistory, ...newEntries];
    setProgressHistory(newHistory);
    localStorage.setItem("tuesdayProgressHistory", JSON.stringify(newHistory));
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
      "tuesdayProgressHistory",
      JSON.stringify(updatedHistory)
    );
    setShowModal(false);
    setEntryToDelete(null);
  }

  return (
    <div className="weekday-component-container">
      <h1>Transformation Tuesday!</h1>
      <h2>Biceps, Triceps & Shoulders</h2>
      <InterestingThings />

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Biceps: <span>Concentration Curl</span>
          </h3>
          <p>
            Look at your bicep muscle bulge as you squeeze the dumbbell. If you
            notice you are having to use your back to lift, then that weight is
            too heavy. It is better to lift a bit lighter weight and get perfect
            form.
          </p>
          <div className="input-btn-container">
            <label htmlFor="biWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="biWeights"
              value={inputData.biWeights}
              onChange={handleChange}
              id="biWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="biReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="biReps"
              value={inputData.biReps}
              onChange={handleChange}
              id="biReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Concentration-Curl-resized.png"
          alt="person performing the concentration dumbbell curl which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Triceps: <span>Kickbacks</span>
          </h3>
          <p>
            No bingo wings in sight. These kickbacks will firm you up in no
            time. Keep presevering!
          </p>

          <div className="input-btn-container">
            <label htmlFor="triWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 3.5kg"
              name="triWeights"
              value={inputData.triWeights}
              onChange={handleChange}
              id="triWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="triReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="triReps"
              value={inputData.triReps}
              onChange={handleChange}
              id="triReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Kickback-resized.png"
          alt="person performing the dumbbell kickback which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Shoulders: <span>Lateral Raises</span>
          </h3>
          <p>
            Again, make sure the weight you are lifting is not too heavy that
            you must engage your back to help. Just focus on the shoulders.
          </p>
          <div className="input-btn-container">
            <label htmlFor="lateralShoulderWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 2.5g"
              name="lateralShoulderWeights"
              value={inputData.lateralShoulderWeights}
              onChange={handleChange}
              id="lateralShoulderWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="lateralShoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="lateralShoulderReps"
              value={inputData.lateralShoulderReps}
              onChange={handleChange}
              id="lateralShoulderReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/dumbbell-lateral-raise-resized.png"
          alt="person performing the dumbbell lateral raise which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Shoulders: <span>Front Raises</span>
          </h3>
          <p>
            You can perform this exercise sitting or standing whichever you
            prefer. Notice you begin with the dumbbells at your sides and you
            give them a little twist as you go up.
          </p>
          <div className="input-btn-container">
            <label htmlFor="frontShoulderWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 2.5kg"
              name="frontShoulderWeights"
              value={inputData.frontShoulderWeights}
              onChange={handleChange}
              id="frontShoulderWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="frontShoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="frontShoulderReps"
              value={inputData.frontShoulderReps}
              onChange={handleChange}
              id="frontShoulderReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/Seated-Dumbbell-Front-Raise-resized.png"
          alt="person performing the seated dumbbell front raise which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Shoulders: <span>Arnold Press</span>
          </h3>
          <p>
            This one has a little twist as you go up as well. Notice how you
            begin with your palms facing toward you and end up with the facing
            away from you.
          </p>
          <div className="input-btn-container">
            <label htmlFor="shoulderArnoldWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="shoulderArnoldWeights"
              value={inputData.shoulderArnoldWeights}
              onChange={handleChange}
              id="shoulderArnoldWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="shoulderArnoldReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="shoulderArnoldReps"
              value={inputData.shoulderArnoldReps}
              onChange={handleChange}
              id="shoulderArnoldReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSaveToProgressHistory}
          >
            Save to Progress History
          </button>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Arnold-press-resized.png"
          alt="person performing the Arnold press exercise which shows which muscles are being used"
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

export default Tuesday;
