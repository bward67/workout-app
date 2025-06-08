import React, { useState, useEffect } from "react";

const Sunday = () => {
  const [formData, setFormData] = useState({
    squatWeights: "",
    squatReps: "",
    hipThrustWeights: "",
    hipThrustReps: "",
    crunchAbsReps: "",
    kneeTuckAbsReps: "",
    scissorKickAbsReps: "",
  });

  //console.log(formData);

  const [savedSunBSquatWeights, setSavedSunBSquatWeights] = useState(() => {
    const saved = localStorage.getItem("savedSunBSquatWeights");
    return saved ? JSON.parse(saved).value : "";
  });

  const [savedSunBSquatReps, setSavedSunBSquatReps] = useState(() => {
    const saved = localStorage.getItem("savedSunBSquatReps");
    return saved ? JSON.parse(saved).value : "";
  });

  const [savedSunHipThrustWeights, setSavedSunHipThrustWeights] = useState(
    () => {
      const saved = localStorage.getItem("savedSunHipThrustWeights");
      return saved ? JSON.parse(saved).value : "";
    }
  );

  const [savedSunHipThrustReps, setSavedSunHipThrustReps] = useState(() => {
    const saved = localStorage.getItem("savedSunHipThrustReps");
    return saved ? JSON.parse(saved).value : "";
  });

  const [savedSunCrunchAbsReps, setSavedSunCrunchAbsReps] = useState(() => {
    const saved = localStorage.getItem("savedSunCrunchAbsReps");
    return saved ? JSON.parse(saved).value : "";
  });

  const [savedSunKneeTuckAbsReps, setSavedSunKneeTuckAbsReps] = useState(() => {
    const saved = localStorage.getItem("savedSunKneeTuckAbsReps");
    return saved ? JSON.parse(saved).value : "";
  });

  const [savedSunScissorKickAbsReps, setSavedSunScissorKickAbsReps] = useState(
    () => {
      const saved = localStorage.getItem("savedSunScissorKickAbsReps");
      return saved ? JSON.parse(saved).value : "";
    }
  );

  const [progressHistory, setProgressHistory] = useState([]);

  ///! useEffect so that input data persists even after browzer closes and reopens:
  useEffect(() => {
    const savedData = {
      squatWeights:
        JSON.parse(localStorage.getItem("savedSunBSquatWeights"))?.value || "",
      squatReps:
        JSON.parse(localStorage.getItem("savedSunBSquatReps"))?.value || "",
      hipThrustWeights:
        JSON.parse(localStorage.getItem("savedSunHipThrustWeights"))?.value ||
        "",
      hipThrustReps:
        JSON.parse(localStorage.getItem("savedSunHipThrustReps"))?.value || "",
      crunchAbsReps:
        JSON.parse(localStorage.getItem("savedSunCrunchAbsReps"))?.value || "",
      kneeTuckAbsReps:
        JSON.parse(localStorage.getItem("savedSunKneeTuckAbsReps"))?.value ||
        "",
      scissorKickAbsReps:
        JSON.parse(localStorage.getItem("savedSunScissorKickAbsReps"))?.value ||
        "",
    };

    setFormData(savedData);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Save to localStorage right away
    const newEntry = { value, updatedAt: new Date().toISOString() };

    switch (name) {
      case "squatWeights":
        localStorage.setItem("savedSunBSquatWeights", JSON.stringify(newEntry));
        break;
      case "squatReps":
        localStorage.setItem("savedSunBSquatReps", JSON.stringify(newEntry));
        break;
      case "hipThrustWeights":
        localStorage.setItem(
          "savedSunHipThrustWeights",
          JSON.stringify(newEntry)
        );
        break;
      case "hipThrustReps":
        localStorage.setItem("savedSunHipThrustReps", JSON.stringify(newEntry));
        break;
      case "crunchAbsReps":
        localStorage.setItem("savedSunCrunchAbsReps", JSON.stringify(newEntry));
        break;
      case "kneeTuckAbsReps":
        localStorage.setItem(
          "savedSunKneeTuckAbsReps",
          JSON.stringify(newEntry)
        );
        break;
      case "scissorKickAbsReps":
        localStorage.setItem(
          "savedSunScissorKickAbsReps",
          JSON.stringify(newEntry)
        );
        break;
      default:
        break;
    }
  }
  //! I want the user to click on the Check Progress btn and have a pop up which shows what dates they changed/input weights and reps for a certain exercise
  //? we can get the timestamp of when the user clicked the button and save it to localStorage - which we can then retrieve later
  function handleSquatWeights() {
    //!  but if newEntry is "" don't push it
    const squatWeights = formData.squatWeights.trim();
    if (squatWeights === "") return;
    const timestamp = new Date().toISOString();
    //console.log(timestamp);
    const newEntry = { value: formData.squatWeights, updatedAt: timestamp };
    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunSquatWeightsHistory")) || [];

    history.push(newEntry);

    localStorage.setItem("sunSquatWeightsHistory", JSON.stringify(history));
    console.log(history);

    //Store lastest
    localStorage.setItem("savedSunBSquatWeights", JSON.stringify(newEntry));
    setSavedSunBSquatWeights(formData.squatWeights);
    // setFormData((prev) => ({ ...prev, squatWeights: "" }));
  }

  function handleSquatReps() {
    const squatReps = formData.squatReps.trim();
    if (squatReps === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = { value: formData.squatReps, updatedAt: timestamp };

    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunSquatRepsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("sunSquatRepsHistory", JSON.stringify(history));

    //Store latest
    localStorage.setItem("savedSunBSquatReps", JSON.stringify(newEntry));
    setSavedSunBSquatReps(formData.squatReps);
    // setFormData((prev) => ({ ...prev, squatReps: "" }));
  }

  function handleHipThrustWeights() {
    const hipThrustWeights = formData.hipThrustWeights.trim();
    if (hipThrustWeights === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = {
      value: formData.hipThrustWeights,
      updatedAt: timestamp,
    };
    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunHipThrustWeightsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("sunHipThrustWeightsHistory", JSON.stringify(history));

    //Store latest
    localStorage.setItem("savedSunHipThrustWeights", JSON.stringify(newEntry));
    setSavedSunHipThrustWeights(formData.hipThrustWeights);
    setFormData((prev) => ({ ...prev, hipThrustWeights: "" }));
  }

  function handleHipThrustReps() {
    const hipThrustReps = formData.hipThrustReps.trim();
    if (hipThrustReps === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = { value: formData.hipThrustReps, updatedAt: timestamp };

    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunHipThrustRepsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("sunHipThrustRepsHistory", JSON.stringify(history));

    //Store latest
    localStorage.setItem("savedSunHipThrustReps", JSON.stringify(newEntry));
    setSavedSunHipThrustReps(formData.hipThrustReps);
    setFormData((prev) => ({ ...prev, hipThrustReps: "" }));
  }

  function handleCrunchAbs() {
    const crunchAbsReps = formData.crunchAbsReps.trim();
    if (crunchAbsReps === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = { value: formData.crunchAbsReps, updatedAt: timestamp };

    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunCrunchAbsRepsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("sunCrunchAbsRepsHistory", JSON.stringify(history));

    //Store latest
    localStorage.setItem("savedSunCrunchAbsReps", JSON.stringify(newEntry));
    setSavedSunCrunchAbsReps(formData.crunchAbsReps);
    setFormData((prev) => ({ ...prev, crunchAbsReps: "" }));
  }

  function handleKneeTuckAbs() {
    const kneeTuckAbsReps = formData.kneeTuckAbsReps.trim();
    if (kneeTuckAbsReps === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = { value: formData.kneeTuckAbsReps, updatedAt: timestamp };

    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunKneeTuckAbsRepsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("sunKneeTuckAbsRepsHistory", JSON.stringify(history));

    //Store latest
    localStorage.setItem("savedSunKneeTuckAbsReps", JSON.stringify(newEntry));
    setSavedSunKneeTuckAbsReps(formData.kneeTuckAbsReps);
    setFormData((prev) => ({ ...prev, kneeTuckAbsReps: "" }));
  }

  function handleScissorKickAbs() {
    const scissorKickAbsReps = formData.scissorKickAbsReps.trim();
    if (scissorKickAbsReps === "") return;
    const timestamp = new Date().toISOString();
    const newEntry = {
      value: formData.scissorKickAbsReps,
      updatedAt: timestamp,
    };

    //Store in history
    const history =
      JSON.parse(localStorage.getItem("sunScissorKickAbsRepsHistory")) || [];
    history.push(newEntry);
    localStorage.setItem(
      "sunScissorKickAbsRepsHistory",
      JSON.stringify(history)
    );

    //Store latest
    localStorage.setItem(
      "savedSunScissorKickAbsReps",
      JSON.stringify(newEntry)
    );
    setSavedSunScissorKickAbsReps(formData.scissorKickAbsReps);
    setFormData((prev) => ({ ...prev, scissorKickAbsReps: "" }));
  }

  function formatDate(isoString) {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function handleCheckProgress() {
    const sunSquatWeightsHistory =
      JSON.parse(localStorage.getItem("sunSquatWeightsHistory")) || [];
    const sunSquatRepsHistory =
      JSON.parse(localStorage.getItem("sunSquatRepsHistory")) || [];
    const sunHipThrustWeightsHistory =
      JSON.parse(localStorage.getItem("sunHipThrustWeightsHistory")) || [];
    const sunHipThrustRepsHistory =
      JSON.parse(localStorage.getItem("sunHipThrustRepsHistory")) || [];
    const sunCrunchAbsRepsHistory =
      JSON.parse(localStorage.getItem("sunCrunchAbsRepsHistory")) || [];
    const sunKneeTuckAbsRepsHistory =
      JSON.parse(localStorage.getItem("sunKneeTuckAbsRepsHistory")) || [];
    const sunScissorKickAbsRepsHistory =
      JSON.parse(localStorage.getItem("sunScissorKickAbsRepsHistory")) || [];

    const allProgress = [
      {
        name: "Bulgarian Split Squats: Weights",
        data: sunSquatWeightsHistory,
      },
      { name: "Bulgarian Split Squats: Reps", data: sunSquatRepsHistory },
      { name: "Hip Thrust: Weights", data: sunHipThrustWeightsHistory },
      { name: "Hip Thrust: Reps", data: sunHipThrustRepsHistory },
      { name: "Long Arm Crunch: Reps", data: sunCrunchAbsRepsHistory },
      {
        name: "Alternating Knee Tuck: Reps",
        data: sunKneeTuckAbsRepsHistory,
      },
      {
        name: "Cross Scissor Kick: Reps",
        data: sunScissorKickAbsRepsHistory,
      },
    ];

    setProgressHistory(allProgress);
  }

  return (
    <div className="weekday-component-container">
      <h1>Super Strength Sunday!</h1>
      <h2>Legs, Glutes & Abs</h2>

      <form>
        <div className="exercise-container">
          <h3>
            LEgs & Glutes: <span>Bulgarian Split Squats</span>
          </h3>
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
          <p>{`Weights: ${savedSunBSquatWeights}`}</p>

          <div>
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
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
          <p className="reps">{`Reps: ${savedSunBSquatReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2021/10/Bulgarian-split-squat.png"
          alt="person performing the bulgarian split squat which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Legs & Glutes:
            <span>Hip Thrust</span>
          </h3>
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
          <p>{`Weights: ${savedSunHipThrustWeights}`}</p>

          <div>
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
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
          <p>{`Reps: ${savedSunHipThrustReps}`}</p>
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png"
          alt="person performing the barbell hip thrust which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Long Arm Crunch</span>
          </h3>

          <div>
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="crunchAbsReps"
                value={formData.crunchAbsReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleCrunchAbs}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedSunCrunchAbsReps}`}</p>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/07/Long-arm-crunch.png"
          alt="person performing the long arm crunch which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Alternating Knee Tuck</span>
          </h3>

          <div>
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="kneeTuckAbsReps"
                value={formData.kneeTuckAbsReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleKneeTuckAbs}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedSunKneeTuckAbsReps}`}</p>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/06/Seated-alternating-knee-tuck.png"
          alt="person performing the setaed alternating knee tuck which shows which muscles are being used"
        />
      </form>

      <form>
        <div className="exercise-container">
          <h3>
            Abs: <span>Cross Scissor Kick</span>
          </h3>

          <div>
            <label>
              <input
                type="text"
                placeholder="number of sets & reps"
                name="scissorKickAbsReps"
                value={formData.scissorKickAbsReps}
                onChange={handleChange}
              />
            </label>
            <button
              className="form-button"
              type="button"
              onClick={handleScissorKickAbs}
            >
              Update
            </button>
          </div>
          <p>{`Reps: ${savedSunScissorKickAbsReps}`}</p>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2022/05/Seated-cross-scissor-kick.png"
          alt="person performing the seated cross-scissor kick which shows which muscles are being used"
        />
      </form>

      <button className="progress-button" onClick={handleCheckProgress}>
        Check Progress
      </button>

      {/* display the progress History */}
      <div className="progress-history">
        {progressHistory.length > 0 && (
          <>
            <h3>Progress History</h3>
            {progressHistory.map((exercise) => (
              <div key={exercise.name}>
                <h4>{exercise.name}</h4>
                <ul>
                  {exercise.data.map((entry, index) => (
                    <li key={index} style={{ color: "rgb(144, 143, 143)" }}>
                      {entry.value} – {formatDate(entry.updatedAt)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sunday;
