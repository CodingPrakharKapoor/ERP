// Dashboard.jsx
import React from 'react';
import Attendance from './Attendance';
import Timetable from './Timetable';
import Leaderboard from './Leaderboard';

const Dashboard = () => {
  return (
    <div className="dashboard p-4">
      <h1 className="text-xl font-bold mb-4">ERP Management Dashboard</h1>
      <div>
        <Attendance />
        <Timetable />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Dashboard;
