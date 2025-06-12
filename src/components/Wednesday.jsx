import { useState, useEffect } from "react";
import InterestingThings from "./InterestingThings";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";

const Wednesday = () => {
  const [inputData, setInputData] = useState({
    lungeWeights: "",
    lungeReps: "",
    squatWeights: "",
    squatReps: "",
    jkAbs: "",
    vupAbs: "",
    hipRaiseAbs: "",
  });

  const [progressHistory, setProgressHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("wednesdayData", JSON.stringify(newData));
      return newData;
    });
  }

  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("wednesdayData")) || {
      lungeWeights: "",
      lungeReps: "",
      squatWeights: "",
      squatReps: "",
      jkAbs: "",
      vupAbs: "",
      hipRaiseAbs: "",
    };
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("wednesdayProgressHistory")) || [];

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

    if (inputData.lungeWeights.trim() && inputData.lungeReps.trim()) {
      newEntries.push({
        exercise: "Lunge Walk",
        value: `${inputData.lungeWeights} - ${inputData.lungeReps}`,
        date: timestamp,
      });
    }
    if (inputData.squatWeights.trim() && inputData.squatReps.trim()) {
      newEntries.push({
        exercise: "Squats",
        value: `${inputData.squatWeights} - ${inputData.squatReps} `,
        date: timestamp,
      });
    }
    if (inputData.jkAbs.trim()) {
      newEntries.push({
        exercise: "JK Abs",
        value: inputData.jkAbs,
        date: timestamp,
      });
    }
    if (inputData.vupAbs.trim()) {
      newEntries.push({
        exercise: "V-up Abs",
        value: inputData.vupAbs,
        date: timestamp,
      });
    }
    if (inputData.hipRaiseAbs.trim()) {
      newEntries.push({
        exercise: "Hip Raise Abs",
        value: inputData.hipRaiseAbs,
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
      <h1>Workhorse Wednesday!</h1>
      <h2>Legs, Glutes & Abs</h2>
      <InterestingThings />

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes:<span>Lunge Walk</span>
          </h3>
          <p>
            Make sure your knee does NOT push forward past your toe. It should
            be in line with your ankle. As soon as you take the step forward
            bring your body downwards not forwards and push up though your front
            heel.
          </p>
          <div className="input-btn-container">
            <label htmlFor="lungeWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="lungeWeights"
              value={inputData.lungeWeights}
              onChange={handleChange}
              id="lungeWeights"
            />
          </div>

          <div className="input-btn-container">
            <label html="lungeReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 1 set of 20"
              name="lungeReps"
              value={inputData.lungeReps}
              onChange={handleChange}
              id="lungeReps"
            />
          </div>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/11/Lunge-resized.png"
          alt="person performing the lunge which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Legs & Glutes:<span>Squats</span>
          </h3>
          <p>
            Sit back as if you are going to sit in a chair. Keep your knees
            inline with your ankles. Push up through your heels.
          </p>
          <div className="input-btn-container">
            <label htmlFor="squatWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="squatWeights"
              value={inputData.squatWeights}
              onChange={handleChange}
              id="squatWeights"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="squatReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 10, 6 hold for 6, 8, 6 hold for 6, 6"
              name="squatReps"
              value={inputData.squatReps}
              onChange={handleChange}
              id="squatReps"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/dumbbell-squat-resized-FIXED.png"
          alt="person performing the dumbbell squat which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Jack-Knife Sit-Ups</span>
          </h3>
          <p>
            This is a great exercise to target all the parts of your abdominals.
          </p>
          <div className="input-btn-container">
            <label htmlFor="jkAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 1 set of 10"
              name="jkAbs"
              value={inputData.jkAbs}
              onChange={handleChange}
              id="jkAbs"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/09/Jackknife-sit-up.png"
          alt="person performing the jackknife sit-up which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Bent-Knee Oblique V-Ups</span>
          </h3>
          <p>
            Keep your neck stiff. As if there was a string attached to your head
            and it is pulling you up.
          </p>
          <div className="input-btn-container">
            <label htmlFor="vupAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 1 set of 10"
              name="vupAbs"
              value={inputData.vupAbs}
              onChange={handleChange}
              id="vupAbs"
            />
          </div>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2018/08/bent-knee-oblique-v-up-resized.png"
          alt="person performing the bent-knee oblique v-up which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Abs: <span>Straight leg hip raise</span>
          </h3>
          <p>
            This exercise can also be done on the floor. You could cross your
            arms in front of you to make sure your don't cheat. You can start
            with your feet up and lift your bum off the floor.
          </p>
          <div className="input-btn-container">
            <label htmlFor="hipRaiseAbs">Reps:</label>
            <input
              type="text"
              placeholder="ex. 1 set of 10"
              name="hipRaiseAbs"
              value={inputData.hipRaiseAbs}
              onChange={handleChange}
              id="hipRaiseAbs"
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
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/incline-straight-leg-hip-raise-resized.png"
          alt="person performing the inclinde straight-let hip-raise which shows which muscles are being used"
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

export default Wednesday;
