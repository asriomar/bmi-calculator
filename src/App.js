import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="grid grid-cols-1 mx-auto w-1/2 my-8 bg-gray-200 p-5 rounded-lg shadow-lg">
      <h1 className="font-sans font-bold text-2xl text-center">
        BMI Calculator
      </h1>
      <div className="m-3 text-center">
        <label>
          Weight (kg):
          <br />
          <input
            className="w-2/3"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="m-3 text-center">
        <label>
          Height (cm): <br />
          <input
            className="w-2/3"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-blue-400 mx-auto py-2 px-4 m-4 shadow-lg"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>
      {bmi !== null && (
        <div>
          <h2 className="text-center text-indigo-500 text-xl  font-semibold">
            Result
          </h2>
          <p className="text-center text-red-700 text-xl font-bold ">
            BMI: {bmi} <br /> ({status})
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
