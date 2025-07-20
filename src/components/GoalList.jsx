import React, { useState } from "react";
import "../GoalList.css";

function GoalList({ goals, onDelete, onUpdate }) {
  const [activeInput, setActiveInput] = useState(null);
  const [inputAmount, setInputAmount] = useState("");

function handleInputSubmit(e, goalId) {
  e.preventDefault();
  const amount = parseFloat(inputAmount);
  const goal = goals.find(g => g.id === goalId);

  if (!goal) return;
  if (isNaN(amount) || amount <= 0) return;

  const newTotal = goal.savedAmount + amount;

  if (newTotal > goal.targetAmount) {
    alert("You can't save more than the target amount!");
    return;
  }

  onUpdate(goalId, amount);
  setActiveInput(null);
  setInputAmount("");
}


  return (
    <div className="goal-list">
      {goals.map((goal) => (
        <div key={goal.id} className="goal-card">
          <h3>{goal.name}</h3>
          <p><strong>Category:</strong> {goal.category}</p>
          <p><strong>Target:</strong> ${parseFloat(goal.targetAmount).toFixed(2)}</p>
          <p><strong>Saved:</strong> ${parseFloat(goal.savedAmount).toFixed(2)}</p>
          <p><strong>Remaining:</strong> ${(goal.targetAmount - goal.savedAmount).toFixed(2)}</p>
          <p><strong>Deadline:</strong> {goal.deadline}</p>
          <progress
  value={goal.savedAmount}
  max={goal.targetAmount}
  style={{ width: "100%", height: "10px", marginBottom: "10px" }}
></progress>
          {parseFloat(goal.savedAmount) >= parseFloat(goal.targetAmount) && (
  <p className="completed-label">✅ Goal Completed!</p>
)}
          <div className="goal-actions">
            {activeInput === goal.id ? (
              <form onSubmit={(e) => handleInputSubmit(e, goal.id)} className="save-form">
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter amount"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  autoFocus
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <button onClick={() => setActiveInput(goal.id)}>+ Save</button>
            )}
            <button onClick={() => onDelete(goal.id)} className="danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
