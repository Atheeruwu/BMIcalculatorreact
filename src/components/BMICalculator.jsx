import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');
  const [bmiClass, setBmiClass] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight && height > 0 && weight > 0) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);

      // Set message based on BMI category
      if (bmiValue < 18.5) {
        setMessage('Underweight');
        setBmiClass('text-pink-400');
      } else if (bmiValue < 24.9) {
        setMessage('Normal weight');
        setBmiClass('text-pink-500');
      } else if (bmiValue < 29.9) {
        setMessage('Overweight');
        setBmiClass('text-pink-600');
      } else {
        setMessage('Obese');
        setBmiClass('text-pink-700');
      }

      // Add animation class to catch user attention
      setAnimationClass('animate-bounce');
    } else {
      setMessage('Please enter valid height and weight');
      setBmiClass('text-red-500');
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setMessage('');
    setBmiClass('');
    setAnimationClass('');
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">BMI Calculator</h1>
      
      <form onSubmit={calculateBMI} className="mb-6">
        <div className="mb-6">
          <label className="block text-left font-medium text-pink-400 mb-1">Height (meters)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="0.01"
            min="0"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g., 1.75"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-left font-medium text-pink-400 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="0.1"
            min="0"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g., 70"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div>
          <div className={`text-4xl font-bold ${bmiClass} ${animationClass} mb-2`}>
            Your BMI: {bmi}
          </div>
          <div className={`text-lg font-medium ${bmiClass} mb-4`}>{message}</div>

          <button
            onClick={resetForm}
            className="mt-4 px-6 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-400 focus:outline-none"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
