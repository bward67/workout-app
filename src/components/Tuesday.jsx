import React, { useState } from "react";

const Tuesday = () => {
  const [formData, setFormData] = useState({
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

  const [savedTuesBiWeights, setSavedTuesBiWeights] = useState(
    localStorage.getItem("savedTuesBiWeights")
  );
  const [savedTuesBiReps, setSavedTuesBiReps] = useState(
    localStorage.getItem("savedTuesBiReps")
  );
  const [savedTuesTriWeights, setSavedTuesTriWeights] = useState(
    localStorage.getItem("savedTuesTriWeights")
  );
  const [savedTuesTriReps, setSavedTuesTriReps] = useState(
    localStorage.getItem("savedTuesTriReps")
  );
  const [savedTuesLateralShoulderWeights, setSavedTuesLateralShoulderWeights] =
    useState(localStorage.getItem("savedTuesLateralShoulderWeights"));
  const [savedTuesLateralShoulderReps, setSavedTuesLateralShoulderReps] =
    useState(localStorage.getItem("savedTuesLateralShoulderReps"));
  const [savedTuesFrontShoulderWeights, setSavedTuesFrontShoulderWeights] =
    useState(localStorage.getItem("savedTuesFrontShoulderWeights"));
  const [savedTuesFrontShoulderReps, setSavedTuesFrontShoulderReps] = useState(
    localStorage.getItem("savedTuesFrontShoulderReps")
  );
  const [savedTuesShoulderArnoldWeights, setSavedTuesShoulderArnoldWeights] =
    useState(localStorage.getItem("savedTuesShoulderArnoldWeights"));

  const [savedTuesShoulderArnoldReps, setSavedTuesShoulderArnoldReps] =
    useState(localStorage.getItem("savedTuesShoulderArnoldReps"));

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdateBiWeights() {
    localStorage.setItem("savedTuesBiWeights", formData.biWeights);
    setSavedTuesBiWeights(formData.biWeights);
    setFormData((prev) => ({ ...prev, biWeights: "" }));
  }

  function handleUpdateBiReps() {
    localStorage.setItem("savedTuesBiReps", formData.biReps);
    setSavedTuesBiReps(formData.biReps);
    setFormData((prev) => ({ ...prev, biReps: "" }));
  }

  function handleUpdateTriWeights() {
    localStorage.setItem("savedTuesTriWeights", formData.triWeights);
    setSavedTuesTriWeights(formData.triWeights);
    setFormData((prev) => ({ ...prev, triWeights: "" }));
  }
  function handleUpdateTriReps() {
    localStorage.setItem("savedTuesTriReps", formData.triReps);
    setSavedTuesTriReps(formData.triReps);
    setFormData((prev) => ({ ...prev, triReps: "" }));
  }

  function handleUpdateLateralShoulderWeights() {
    localStorage.setItem(
      "savedTuesLateralShoulderWeights",
      formData.lateralShoulderWeights
    );
    setSavedTuesLateralShoulderWeights(formData.lateralShoulderWeights);
    setFormData((prev) => ({ ...prev, lateralShoulderWeights: "" }));
  }

  function handleUpdateLateralShoulderReps() {
    localStorage.setItem(
      "savedTuesLateralShoulderReps",
      formData.lateralShoulderReps
    );
    setSavedTuesLateralShoulderReps(formData.lateralShoulderReps);
    setFormData((prev) => ({ ...prev, lateralShoulderReps: "" }));
  }

  function handleUpdateFrontShoulderWeights() {
    localStorage.setItem(
      "savedTuesFrontShoulderWeights",
      formData.frontShoulderWeights
    );
    setSavedTuesFrontShoulderWeights(formData.frontShoulderWeights);
    setFormData((prev) => ({ ...prev, frontShoulderWeights: "" }));
  }

  function handleUpdateFrontShoulderReps() {
    localStorage.setItem(
      "savedTuesFrontShoulderReps",
      formData.frontShoulderReps
    );
    setSavedTuesFrontShoulderReps(formData.frontShoulderReps);
    setFormData((prev) => ({ ...prev, frontShoulderReps: "" }));
  }

  function handleUpdateShoulderArnoldWeights() {
    localStorage.setItem(
      "savedTuesShoulderArnoldWeights",
      formData.shoulderArnoldWeights
    );
    setSavedTuesShoulderArnoldWeights(formData.shoulderArnoldWeights);
    setFormData((prev) => ({ ...prev, shoulderArnoldWeights: "" }));
  }

  function handleUpdateShoulderArnoldReps() {
    localStorage.setItem(
      "savedTuesShoulderArnoldReps",
      formData.shoulderArnoldReps
    );
    setSavedTuesShoulderArnoldReps(formData.shoulderArnoldReps);
    setFormData((prev) => ({ ...prev, shoulderArnoldReps: "" }));
  }
  return (
    <div className="weekday-component-container">
      <h1>Transformation Tuesday!</h1>
      <h2>Biceps, Triceps & Shoulders</h2>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Biceps: <span>Concentration Curl</span>
          </h3>
          <p>
            Look at your bicep muscle bulge as you squeeze the dumbbell. If you
            notice you are having to use your back to lift then that weight is
            too heavy. It is better to lift a bit lighter weight and get perfect
            form.
          </p>
          <div className="input-btn-container">
            <label htmlFor="biWeights">Weights:</label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="biWeights"
              value={formData.biWeights}
              onChange={handleChange}
              id="biWeights"
            />
          </div>
          <button
            type="button"
            className="save-to-progress-history-button"
            onClick={handleUpdateBiWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="biReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="biReps"
              value={formData.biReps}
              onChange={handleChange}
              id="biReps"
            />
          </div>
          <button
            type="button"
            className="save-to-progress-history-button"
            onClick={handleUpdateBiReps}
          >
            Save to Progress History
          </button>
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
              value={formData.triWeights}
              onChange={handleChange}
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
              name="triReps"
              value={formData.triReps}
              onChange={handleChange}
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
              value={formData.lateralShoulderWeights}
              onChange={handleChange}
              id="lateralShoulderWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateLateralShoulderWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="lateralShoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 10"
              name="lateralShoulderReps"
              value={formData.lateralShoulderReps}
              onChange={handleChange}
              id="lateralShoulderReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateLateralShoulderReps}
          >
            Save to Progress History
          </button>
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
              value={formData.frontShoulderWeights}
              onChange={handleChange}
              id="frontShoulderWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateFrontShoulderWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="frontShoulderReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="frontShoulderReps"
              value={formData.frontShoulderReps}
              onChange={handleChange}
              id="frontShoulderReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateFrontShoulderReps}
          >
            Save to Progress History
          </button>
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
              value={formData.shoulderArnoldWeights}
              onChange={handleChange}
              id="shoulderArnoldWeights"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateShoulderArnoldWeights}
          >
            Save to Progress History
          </button>

          <div className="input-btn-container">
            <label htmlFor="shoulderArnoldReps">Reps:</label>
            <input
              type="text"
              placeholder="ex. 3 sets of 12"
              name="shoulderArnoldReps"
              value={formData.shoulderArnoldReps}
              onChange={handleChange}
              id="shoulderArnoldReps"
            />
          </div>
          <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleUpdateShoulderArnoldReps}
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
      <button className="check-progress-history-button">
        Check Progress History
      </button>
    </div>
  );
};

export default Tuesday;
