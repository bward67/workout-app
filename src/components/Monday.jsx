import React, { useState, useEffect } from "react";
import "../workoutStyle.css";

import ThingsToKnow from "./InterestingThings.jsx";

const Monday = () => {
  const [inputData, setInputData] = useState({
    chestWeights: "",
    chestReps: "",
    backWeights: "",
    backReps: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("mondayFormData", JSON.stringify(newData));
      return newData;
    });
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mondayFormData")) || {
      chestWeights: "",
      chestReps: "",
      backWeights: "",
      backReps: "",
    };
    console.log("Loaded saved data", saved);
    setInputData(saved);
  }, []);

  function handleUpdate() {
    console.log("Saving form data:", inputData);
    localStorage.setItem("mondayFormData", JSON.stringify(inputData));
  }

  return (
    <div className="weekday-component-container">
      <h1>Mega Muscle Monday!</h1>
      <h2>Chest & Back</h2>
      <ThingsToKnow />

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
          <button
            className="save-to-progress-history-button"
            type="button"
            // onClick={handleUpdateChestWeights}
            onClick={handleUpdate}
          >
            Save to Progress History
          </button>

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
          <button
            className="save-to-progress-history-button"
            type="button"
            // onClick={handleUpdateChestWeights}
            onClick={handleUpdate}
          >
            Save to Progress History
          </button>
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
          <button
            className="save-to-progress-history-button"
            type="button"
            // onClick={handleUpdateBackWeights}
            onClick={handleUpdate}
          >
            Save to Progress History
          </button>
          {/* <p>{`Weights: ${savedMonBackWeights}`} </p> */}
          {/* <p>{`Weights: ${formData.backWeights}`} </p> */}

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
            // onClick={handleUpdateBackReps}
            onClick={handleUpdate}
          >
            Save to progress History
          </button>
          {/* <p>{`Reps: ${savedMonBackReps}`} </p> */}
          {/* <p>{`Reps: ${formData.backReps}`} </p> */}
        </div>
        <img
          className="exercise-img"
          src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png"
          alt="person performing the bent over one arm dumbbell row which shows which muscles are being used"
        />
      </div>

      <button className="check-progress-history-button">
        Check Progress History
      </button>
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
