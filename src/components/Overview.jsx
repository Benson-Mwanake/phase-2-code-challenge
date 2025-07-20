import React from "react";
import "../Overview.css";

function Overview({ goals }) {
  const totalGoals = goals.length;

  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  const rate = totalGoals
    ? Math.round(
        goals.reduce((sum, g) => {
          const saved = parseFloat(g.savedAmount);
          const target = parseFloat(g.targetAmount);
          if (!target) return sum;
          return sum + Math.min(saved / target, 1);
        }, 0) * (100 / totalGoals)
      )
    : 0;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completed}</p>
      <p>Completion Rate: {rate}%</p>
    </div>
  );
}

export default Overview;
