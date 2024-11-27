import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function MyProfile() {
    const {roll} = useParams();
    const [studentData, setStudentData] = useState({});

    const fetchStudentData = async () => {
        try {
            const response = await axios.get(`/api/student/${roll}`);
            if (response.data) {
                setStudentData(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect( () => {
        fetchStudentData();
    }, []);

  return (
    <>
    <div className="p-8 bg-green-50 min-h-screen w-full">
      <h1 className="text-5xl font-bold mb-8 text-green-700">My Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Personal Information</h2>
            <p className="text-gray-700 mb-4"><strong>Name:</strong> {studentData.studentName}</p>
            <p className="text-gray-700 mb-4"><strong>Roll No:</strong> {studentData.rollNo}</p>
            <p className="text-gray-700 mb-4"><strong>Date of Birth:</strong> {studentData.dob}</p>
            <p className="text-gray-700 mb-4"><strong>Gender:</strong> {studentData.gender}</p>
            <p className="text-gray-700 mb-4"><strong>Phone:</strong> {studentData.phone}</p>
            <p className="text-gray-700 mb-4"><strong>Email:</strong> {studentData.email}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Course Information</h2>
            <p className="text-gray-700 mb-4"><strong>Course:</strong> {studentData.studentCourse}</p>
            {/* <p className="text-gray-700 mb-4"><strong>Course ID:</strong> {studentData.course.courseId}</p> */}
            {/* <p className="text-gray-700 mb-4"><strong>Course Name:</strong> {studentData.course.courseName}</p> */}
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Family Information</h2>
            <p className="text-gray-700 mb-4"><strong>Father's Name:</strong> {studentData.fatherName}</p>
            <p className="text-gray-700 mb-4"><strong>Mother's Name:</strong> {studentData.motherName}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProfile