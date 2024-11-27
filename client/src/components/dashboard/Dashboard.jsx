/* eslint-disable no-unused-vars */
// Dashboard.jsx
import React,{useState, useEffect} from 'react';
import Attendance from './Attendance';
import Timetable from './Timetable';
import Leaderboard from './Leaderboard';
import axios from 'axios';

const Dashboard = () => {
  

  return (
    <div >
      <h1 className="text-xl font-bold mb-4">ERP Management Dashboard</h1>
      <div>
        <Attendance />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Dashboard;
