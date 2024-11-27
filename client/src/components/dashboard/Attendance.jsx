import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Attendance = () => {
  const [attendance, setAttendance] = useState([])
  const {roll} = useParams();

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`/api/student/attendance/${roll}`);
      setAttendance(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <>
      <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attendance.map((record) => (
          <div key={record.attendanceId} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{record.subject.subjectName}</h2>
            <p className="text-gray-700 mb-1"><strong>Teacher:</strong> {record.subject.teacherName || 'N/A'}</p>
            <p className="text-gray-700 mb-1"><strong>Date:</strong> {record.date}</p>
            <p className="text-gray-700 mb-1"><strong>Status:</strong> {record.status}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Attendance;
