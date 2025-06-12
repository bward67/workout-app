import React, { useState, useEffect } from "react";
import "../workoutStyle.css";
import InterestingThings from "./InterestingThings.jsx";
import { TbTrashXFilled } from "react-icons/tb";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";

const Monday = () => {
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
      const newData = {
        ...prev,
        [name]: value,
      };
      localStorage.setItem("mondayData", JSON.stringify(newData));
      console.log(newData);

      return newData;
    });
  }

  //! I will move this to a utility function outside of this component later
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  useEffect(() => {
    const savedLSdata = JSON.parse(localStorage.getItem("mondayData")) || {
      chestWeights: "",
      chestReps: "",
      backWeights: "",
      backReps: "",
    };
    console.log("Saved LocalStorage data", savedLSdata);
    setInputData(savedLSdata);

    const savedHistory =
      JSON.parse(localStorage.getItem("mondayProgressHistory")) || [];
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
      alert("Please fill in both Weights and Reps for at least one exercise.");
    }
    const newHistory = [...progressHistory, ...newEntries];
    setProgressHistory(newHistory);
    localStorage.setItem("mondayProgressHistory", JSON.stringify(newHistory));
  }

  //! I want to capture the time stamp (just the date, month and year) of when the user clicks the save to progress history button as well as get the value and then display the time stamp and the value after the cooresponding inputData key
  function handleCheckProgressHistory() {
    setShowHistory((prev) => !prev);
  }

  function confirmDeleteEntry() {
    const updatedHistory = progressHistory.filter(
      (_, index) => index !== entryToDelete
    );
    // the _ is just a convention FE dev's use to mean I am not using this variable
    setProgressHistory(updatedHistory);
    localStorage.setItem(
      "mondayProgressHistory",
      JSON.stringify(updatedHistory)
    );
    setShowModal(false);
    setEntryToDelete(null);
  }
  return (
    <div className="weekday-component-container">
      <h1>Mega Muscle Monday!</h1>
      <h2>Chest & Back</h2>
      <InterestingThings />

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Chest: <span>Bench Press</span>
          </h3>
          <p>
            As you push up remember to exhale and concentrate on using your
            chest muscles. Feel the squeeze.
          </p>
          <div className="input-btn-container">
            <label htmlFor="chestWeights">Weights: </label>
            <input
              type="text"
              placeholder="ex. 5kg"
              name="chestWeights"
              value={inputData.chestWeights}
              onChange={handleChange}
              id="chestWeights"
              // size="10"
            />
          </div>

          <div className="input-btn-container">
            <label htmlFor="chestReps"> Reps: </label>

            <input
              type="text"
              placeholder="ex. 3 of sets of 12"
              name="chestReps"
              value={inputData.chestReps}
              onChange={handleChange}
              id="chestReps"
            />
          </div>
        </div>

        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png"
          alt="person performing the dumbbell bench press which shows which muscles are being used"
        />
      </div>

      <div className="exercise-container">
        <div className="exercise-content-container">
          <h3>
            Back: <span>Bent-over Rows</span>
          </h3>
          <p>
            Your less dominant side may struggle to lift the same amount as your
            more dominant side. Just lift as many reps as you can and if it gets
            too difficult, finish the reps off with a lighter weight. This is a
            good reason why using dumbbells in this case are better than using a
            barbell. With a barbell the dominant side usually lifts more of the
            weight.
          </p>
          <div className="input-btn-container">
            <label>
              Weights:
              <input
                type="text"
                placeholder="ex. 5kg"
                name="backWeights"
                value={inputData.backWeights}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <button
            className="save-to-progress-history-button"
            type="button"
            onClick={handleSaveToProgressHistory}
          >
            Save to Progress History
          </button> */}

          <div className="input-btn-container">
            <label>
              Reps:
              <input
                type="text"
                placeholder="ex. 3 sets of 12"
                name="backReps"
                value={inputData.backReps}
                onChange={handleChange}
              />
            </label>
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
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png"
          alt="person performing the bent over one arm dumbbell row which shows which muscles are being used"
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
                  <p> {entry.value} </p>
                  <p>{entry.date}</p>
                  <TbTrashXFilled
                    className="trash-icon"
                    onClick={() => {
                      setEntryToDelete(index);
                      setShowModal(true);
                    }}
                    title="Delete entry"
                    // this just adds a small tooltip when the user hovers the icon
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

export default Monday;

//! Sunday night at 6pm BEFORE removing UPDATE button and adding Label on Inputs etc:
// import React, { useState, useEffect } from "react";
// import "../workoutStyle.css";

// const Monday = () => {
//   const [formData, setFormData] = useState({
//     chestWeights: "",
//     chestReps: "",
//     backWeights: "",
//     backReps: "",
//   });

//   // const [savedMonChestWeights, setSavedMonChestWeights] = useState(
//   //   localStorage.getItem("savedMonChestWeights")
//   // );
//   // const [savedMonChestReps, setSavedMonChestReps] = useState(
//   //   localStorage.getItem("savedMonChestReps")
//   // );

//   // const [savedMonBackWeights, setSavedMonBackWeights] = useState(
//   //   localStorage.getItem("savedMonBackWeights")
//   // );
//   // const [savedMonBackReps, setSavedMonBackReps] = useState(
//   //   localStorage.getItem("savedMonBackReps")
//   // );

//   // const [savedMonChestWeights, setSavedMonChestWeights] = useState("");
//   // const [savedMonChestReps, setSavedMonChestReps] = useState("");
//   // const [savedMonBackWeights, setSavedMonBackWeights] = useState("");
//   // const [savedMonBackReps, setSavedMonBackReps] = useState("");

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const newData = { ...prev, [name]: value };
//       localStorage.setItem("mondayFormData", JSON.stringify(newData));
//       return newData;
//     });
//   }

//   // function handleUpdateChestWeights() {
//   //   localStorage.setItem("savedMonChestWeights", formData.chestWeights);
//   //   setSavedMonChestWeights(formData.chestWeights);
//   //   // setFormData((prev) => ({ ...prev, chestWeights: "" }));
//   // }

//   // function handleUpdateChestReps() {
//   //   localStorage.setItem("savedMonChestReps", formData.chestReps);
//   //   setSavedMonChestReps(formData.chestReps);
//   //   // setFormData((prev) => ({ ...prev, chestReps: "" }));
//   // }

//   // function handleUpdateBackWeights() {
//   //   localStorage.setItem("savedMonBackWeights", formData.backWeights);
//   //   setSavedMonBackWeights(formData.backWeights);
//   //   // setFormData((prev) => ({ ...prev, backWeights: "" }));
//   // }

//   // function handleUpdateBackReps() {
//   //   localStorage.setItem("savedMonBackReps", formData.backReps);
//   //   setSavedMonBackReps(formData.backReps);
//   //   // setFormData((prev) => ({ ...prev, backReps: "" }));
//   // }

//   // useEffect(() => {
//   //   setSavedMonChestWeights(localStorage.getItem("savedMonChestWeights") || "");
//   //   setSavedMonChestReps(localStorage.getItem("savedMonChestReps") || "");
//   //   setSavedMonBackWeights(localStorage.getItem("savedMonBackWeights") || "");
//   //   setSavedMonBackReps(localStorage.getItem("savedMonBackReps") || "");
//   // }, []);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("mondayFormData")) || {
//       chestWeights: "",
//       chestReps: "",
//       backWeights: "",
//       backReps: "",
//     };
//     console.log("Loaded saved data", saved);

//     setFormData(saved);
//   }, []);

//   function handleUpdate() {
//     console.log("Saving form data:", formData);
//     localStorage.setItem("mondayFormData", JSON.stringify(formData));
//   }

//   return (
//     <div className="weekday-component-container">
//       <h1>Mega Muscle Monday!</h1>
//       <h2>Today is Chest and Back day</h2>

//       <form>
//         <div className="exercise-container">
//           <h3>
//             Chest: <span>Bench Press</span>
//           </h3>
//           <div className="input-btn-container">
//             <label>
//               <input
//                 type="text"
//                 placeholder="weights amount in kg"
//                 name="chestWeights"
//                 value={formData.chestWeights}
//                 onChange={handleChange}
//               />
//             </label>
//             <button
//               className="form-button"
//               type="button"
//               // onClick={handleUpdateChestWeights}
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           </div>
//           {/* <p>{`Weights: ${savedMonChestWeights}`} </p> */}
//           <p>{`Weights: ${formData.chestWeights}`} </p>

//           <div className="input-btn-container">
//             <label>
//               <input
//                 type="text"
//                 placeholder="number of sets & reps"
//                 name="chestReps"
//                 value={formData.chestReps}
//                 onChange={handleChange}
//               />
//             </label>
//             <button
//               className="form-button"
//               type="button"
//               // onClick={handleUpdateChestReps}
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           </div>
//           {/* <p>{`Reps: ${savedMonChestReps}`} </p> */}
//           <p>{`Reps: ${formData.chestReps}`} </p>
//         </div>

//         <img
//           className="exercise-img"
//           src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png"
//           alt="person performing the dumbbell bench press which shows which muscles are being used"
//         />
//       </form>

//       <form>
//         <div className="exercise-container">
//           <h3>
//             Back: <span>Bent-over Rows</span>
//           </h3>
//           <div className="input-btn-container">
//             <label>
//               <input
//                 type="text"
//                 placeholder="weights amount in kg"
//                 name="backWeights"
//                 value={formData.backWeights}
//                 onChange={handleChange}
//               />
//             </label>
//             <button
//               className="form-button"
//               type="button"
//               // onClick={handleUpdateBackWeights}
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           </div>
//           {/* <p>{`Weights: ${savedMonBackWeights}`} </p> */}
//           <p>{`Weights: ${formData.backWeights}`} </p>

//           <div className="input-btn-container">
//             <label>
//               <input
//                 type="text"
//                 placeholder="number of sets & reps"
//                 name="backReps"
//                 value={formData.backReps}
//                 onChange={handleChange}
//               />
//             </label>
//             <button
//               className="form-button"
//               type="button"
//               // onClick={handleUpdateBackReps}
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           </div>
//           {/* <p>{`Reps: ${savedMonBackReps}`} </p> */}
//           <p>{`Reps: ${formData.backReps}`} </p>
//         </div>
//         <img
//           className="exercise-img"
//           src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png"
//           alt="person performing the bent over one arm dumbbell row which shows which muscles are being used"
//         />
//       </form>
//     </div>
//   );
// };

// export default Monday;

//! Wednesday 10:19 before adding the Progress History button:

// import React, { useState, useEffect } from "react";
// import "../workoutStyle.css";
// import InterestingThings from "./InterestingThings.jsx";

// const Monday = () => {
//   const [inputData, setInputData] = useState({
//     chestWeights: "",
//     chestReps: "",
//     backWeights: "",
//     backReps: "",
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setInputData((prev) => {
//       const newData = { ...prev, [name]: value };
//       localStorage.setItem("mondayFormData", JSON.stringify(newData));
//       return newData;
//     });
//   }

//   useEffect(() => {
//     const savedLSdata = JSON.parse(localStorage.getItem("mondayFormData")) || {
//       chestWeights: "",
//       chestReps: "",
//       backWeights: "",
//       backReps: "",
//     };
//     console.log("Saved LocalStorage data", savedLSdata);
//     setInputData(savedLSdata);
//   }, []);

//   function handleSaveToProgressHistory() {
//     console.log("Saving form data:", inputData);
//     localStorage.setItem("mondayFormData", JSON.stringify(inputData));
//   }

//   return (
//     <div className="weekday-component-container">
//       <h1>Mega Muscle Monday!</h1>
//       <h2>Chest & Back</h2>
//       <InterestingThings />

//       <div className="exercise-container">
//         <div className="exercise-content-container">
//           <h3>
//             Chest: <span>Bench Press</span>
//           </h3>
//           <p>
//             As you push up remember to exhale and concentrate on using your
//             chest muscles. Feel the squeeze.
//           </p>
//           <div className="input-btn-container">
//             <label htmlFor="chestWeights">Weights: </label>
//             <input
//               type="text"
//               placeholder="ex. 5kg"
//               name="chestWeights"
//               value={inputData.chestWeights}
//               onChange={handleChange}
//               id="chestWeights"
//               // size="10"
//             />
//           </div>
//           <button
//             className="save-to-progress-history-button"
//             type="button"
//             onClick={handleSaveToProgressHistory}
//           >
//             Save to Progress History
//           </button>

//           <div className="input-btn-container">
//             <label htmlFor="chestReps"> Reps: </label>

//             <input
//               type="text"
//               placeholder="ex. 3 of sets of 12"
//               name="chestReps"
//               value={inputData.chestReps}
//               onChange={handleChange}
//               id="chestReps"
//             />
//           </div>
//           <button
//             className="save-to-progress-history-button"
//             type="button"
//             onClick={handleSaveToProgressHistory}
//           >
//             Save to Progress History
//           </button>
//         </div>

//         <img
//           className="exercise-img"
//           src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png"
//           alt="person performing the dumbbell bench press which shows which muscles are being used"
//         />
//       </div>

//       <div className="exercise-container">
//         <div className="exercise-content-container">
//           <h3>
//             Back: <span>Bent-over Rows</span>
//           </h3>
//           <p>
//             Your less dominant side may struggle to lift the same amount as your
//             more dominant side. Just lift as many reps as you can and if it gets
//             too difficult, finish the reps off with a lighter weight. This is a
//             good reason why using dumbbells in this case are better than using a
//             barbell. With a barbell the dominant side usually lifts more of the
//             weight.
//           </p>
//           <div className="input-btn-container">
//             <label>
//               Weights:
//               <input
//                 type="text"
//                 placeholder="ex. 5kg"
//                 name="backWeights"
//                 value={inputData.backWeights}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <button
//             className="save-to-progress-history-button"
//             type="button"
//             onClick={handleSaveToProgressHistory}
//           >
//             Save to Progress History
//           </button>

//           <div className="input-btn-container">
//             <label>
//               Reps:
//               <input
//                 type="text"
//                 placeholder="ex. 3 sets of 12"
//                 name="backReps"
//                 value={inputData.backReps}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <button
//             className="save-to-progress-history-button"
//             type="button"
//             onClick={handleSaveToProgressHistory}
//           >
//             Save to progress History
//           </button>
//         </div>
//         <img
//           className="exercise-img"
//           src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png"
//           alt="person performing the bent over one arm dumbbell row which shows which muscles are being used"
//         />
//       </div>

//       <button className="check-progress-history-button">
//         Check Progress History
//       </button>
//     </div>
//   );
// };

// export default Monday;
