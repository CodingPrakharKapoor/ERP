// Timetable.jsx
import React from 'react';

const Timetable = () => {
  const todaySchedule = [
    { time: '9:00 AM', subject: 'Mathematics' },
    { time: '11:00 AM', subject: 'Physics' },
    { time: '2:00 PM', subject: 'Computer Science' },
  ];

  return (
    <div className="timetable bg-white shadow p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Today's Timetable</h2>
      <ul>
        {todaySchedule.map((slot, index) => (
          <li key={index} className="flex justify-between">
            <span>{slot.time}</span>
            <span>{slot.subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timetable;
