// Timetable.jsx
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Timetable = () => {
  const {roll} = useParams();
  const [timetable, setTimetable] = useState([]);

  const fetchTimetable = async () => {
    try {
      const response = await axios.get(`/api/student/timetable/${roll}`);
      setTimetable(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = [1, 2, 3, 4, 5, 6];
  const timetableMatrix = periods.map(period => {
    const row = { period };
    days.forEach(day => {
      const record = timetable.find(
        item => item.day === day && item.period === period
      );
      row[day] = record ? `${record.subject.subjectName} (${record.teacher})` : '';
    });
    return row;
  });

  useEffect(() => {
    fetchTimetable();
  }, []);

  return (
    <>
        <div className="p-8 bg-green-50 min-h-screen w-full">
      <h1 className="text-4xl font-bold mb-8 text-green-700">Timetable</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-lg shadow-lg rounded-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-4 px-6 border-b-2 border-green-700">Period</th>
              {days.map(day => (
                <th key={day} className="py-4 px-6 border-b-2 border-green-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetableMatrix.map(row => (
              <tr key={row.period} className="hover:bg-green-100">
                <td className="py-4 px-6 border-b border-green-200">{row.period}</td>
                {days.map(day => (
                  <td key={day} className="py-4 px-6 border-b border-green-200">
                    {row[day]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Timetable;
