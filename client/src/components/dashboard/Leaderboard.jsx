// Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {

  const [students, setStudents] = useState([]);
  const [studentUtils, setStudentUtils] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/student/allStudent');
      setStudents(response.data);

    } catch (error) { console.error(error); }
  }

  const fetchStudentUtils = async () => {
    try {
      const response = await axios.get('/api/student/allStudentUtils');
      setStudentUtils(response.data);

    } catch (error) { console.error(error); }
  }

  useEffect(() => {
    fetchStudents();
    fetchStudentUtils();
  }, []);

  useEffect(() => {
    if (students.length > 0 && studentUtils.length > 0) {
      const mergedData = students.map(student => {
        const utils = studentUtils.find(util => util.student.rollNo === student.rollNo);
        return { ...student, cpi: utils ? utils.cpi : 'N/A' };
      });

      // Sort the merged data by CPI in descending order
      const sortedData = mergedData.sort((a, b) => b.cpi - a.cpi);
      setLeaderboard(sortedData);
    }
  }, [students, studentUtils]);

  return (
    <>
    <div className="p-8 bg-green-50 min-h-screen w-full">
      <h1 className="text-4xl font-bold mb-8 text-green-700">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white text-lg shadow-lg rounded-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-4 px-6 border-b-2 border-green-700">Roll No</th>
              <th className="py-4 px-6 border-b-2 border-green-700">Name</th>
              <th className="py-4 px-6 border-b-2 border-green-700">Course</th>
              <th className="py-4 px-6 border-b-2 border-green-700">CPI</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(student => (
              <tr key={student.rollNo} className="hover:bg-green-100">
                <td className="py-4 px-6 border-b border-green-200">{student.rollNo}</td>
                <td className="py-4 px-6 border-b border-green-200">{student.studentName}</td>
                <td className="py-4 px-6 border-b border-green-200">{student.studentCourse}</td>
                <td className="py-4 px-6 border-b border-green-200">{student.cpi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Leaderboard;
