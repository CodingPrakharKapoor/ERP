// Leaderboard.jsx
import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { name: 'John Doe', score: 95 },
    { name: 'Jane Smith', score: 90 },
    { name: 'Alex Johnson', score: 88 },
  ];

  return (
    <div className="leaderboard bg-white shadow p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
      <ul>
        {leaderboardData.map((student, index) => (
          <li key={index} className="flex justify-between">
            <span>{student.name}</span>
            <span>{student.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
