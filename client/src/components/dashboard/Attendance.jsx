import React from 'react';

const Attendance = () => {
  const attendanceData = [
    { subject: 'Mathematics', teacher: 'Mr. Sharma', attended: 7, total: 8 },
    { subject: 'Agile Development', teacher: 'Ms. Gupta', attended: 6, total: 8 },
    { subject: 'Chemistry', teacher: 'Dr. Verma', attended: 8, total: 8 },
    { subject: 'Biology', teacher: 'Mr. Singh', attended: 5, total: 8 },
    { subject: 'English', teacher: 'Ms. Roy', attended: 7, total: 9 },
    { subject: 'History', teacher: 'Mr. Das', attended: 6, total: 7 },
    { subject: 'Geography', teacher: 'Ms. Kumar', attended: 8, total: 8 },
    { subject: 'Economics', teacher: 'Dr. Patel', attended: 7, total: 8 },
    { subject: 'Computer Science', teacher: 'Mr. Nair', attended: 9, total: 10 },
    { subject: 'Physical Education', teacher: 'Ms. Reddy', attended: 10, total: 10 },
    { subject: 'Political Science', teacher: 'Dr. Mishra', attended: 6, total: 7 },
    { subject: 'Psychology', teacher: 'Ms. Dutta', attended: 8, total: 8 },
  ];

  return (
    <div className="attendance bg-gray-100 p-6 rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Attendance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {attendanceData.map((subject, index) => {
          const attendancePercentage = ((subject.attended / subject.total) * 100).toFixed(2);
          return (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800">{subject.subject}</h3>
              <p className="text-sm text-gray-500 mt-1">Teacher: {subject.teacher}</p>
              <p className="text-sm mt-4 font-medium">
                Attendance: <span className="text-blue-500">{attendancePercentage}%</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
