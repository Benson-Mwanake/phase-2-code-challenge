import React, { useState } from "react";
import "../AddGoalForm.css";

function AddGoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: 0,
    savedAmount: 0,
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0]
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

function handleSubmit(e) {
  e.preventDefault();

  const formattedGoal = {
    ...formData,
    targetAmount: parseFloat(formData.targetAmount),
    savedAmount: parseFloat(formData.savedAmount),
  };

  fetch("https://phase-2-code-2-api.onrender.com/goals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formattedGoal),
  })
    .then((res) => res.json())
    .then(onAddGoal);

  setFormData({
    name: "",
    category: "",
    targetAmount: 0,
    savedAmount: 0,
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });
}


  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        name="deadline"
        type="date"
        value={formData.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
