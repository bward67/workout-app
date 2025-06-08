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

      <form>
        <div className="exercise-container">
          <h3>
            Biceps: <span>Concentration Curl</span>
          </h3>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="biWeights"
                value={formData.biWeights}
                onChange={handleChange}
              />
            </label>
            <button
              type="button"
              className="form-button"
              onClick={handleUpdateBiWeights}
            >
              Update
            </button>
          </div>

          <p>{`Weights: ${savedTuesBiWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="biReps"
                value={formData.biReps}
                onChange={handleChange}
              />
            </label>
            <button
              type="button"
              className="form-button"
              onClick={handleUpdateBiReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedTuesBiReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Concentration-Curl-resized.png"
          alt="person performing the concentration dumbbell curl which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Triceps: <span>Kickbacks</span>
          </h3>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="triWeights"
                value={formData.triWeights}
                onChange={handleChange}
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
          <p>{`Weights: ${savedTuesTriWeights}`} </p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="triReps"
                value={formData.triReps}
                onChange={handleChange}
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
          <p>{`Reps: ${savedTuesTriReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Kickback-resized.png"
          alt="person performing the dumbbell kickback which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Shoulders: <span>Lateral Raises</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="lateralShoulderWeights"
                value={formData.lateralShoulderWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateLateralShoulderWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedTuesLateralShoulderWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="lateralShoulderReps"
                value={formData.lateralShoulderReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateLateralShoulderReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedTuesLateralShoulderReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/dumbbell-lateral-raise-resized.png"
          alt="person performing the dumbbell lateral raise which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Shoulders: <span>Front Raises</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="frontShoulderWeights"
                value={formData.frontShoulderWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateFrontShoulderWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedTuesFrontShoulderWeights}`}</p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="frontShoulderReps"
                value={formData.frontShoulderReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateFrontShoulderReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedTuesFrontShoulderReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/Seated-Dumbbell-Front-Raise-resized.png"
          alt="person performing the seated dumbbell front raise which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Shoulders: <span>Arnold Press</span>
          </h3>
          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="weights amount in kg"
                name="shoulderArnoldWeights"
                value={formData.shoulderArnoldWeights}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateShoulderArnoldWeights}
            >
              Update
            </button>
          </div>
          <p>{`Weights: ${savedTuesShoulderArnoldWeights}`} </p>

          <div className="input-btn-container">
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="shoulderArnoldReps"
                value={formData.shoulderArnoldReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleUpdateShoulderArnoldReps}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedTuesShoulderArnoldReps}`} </p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Arnold-press-resized.png"
          alt="person performing the Arnold press exercise which shows which muscles are being used"
        />
      </form>
    </div>
  );
};

export default Tuesday;
