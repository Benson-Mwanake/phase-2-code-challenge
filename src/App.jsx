import React, { useEffect, useState } from "react";
import AddGoalForm from "./components/AddGoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import "./App.css";

const API = "https://phase-2-code-2-api.onrender.com/goals";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function handleDeleteGoal(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then((res) => {
      if (res.ok) {
        setGoals(goals.filter((goal) => String(goal.id) !== String(id)));
      } else {
        console.error("Failed to delete goal:", res.status);
      }
    });
}


function handleUpdateGoal(id, amount) {
  const updatedGoals = goals.map((goal) =>
    goal.id === id
      ? { ...goal, savedAmount: parseFloat(goal.savedAmount) + amount }
      : goal
  );

  setGoals(updatedGoals);

  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      savedAmount: updatedGoals.find((g) => g.id === id).savedAmount,
    }),
  });
}


  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAddGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        onDelete={handleDeleteGoal}
        onUpdate={handleUpdateGoal}
      />
    </div>
  );
}

export default App;
