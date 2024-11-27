import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ERPMain from './ERPMain'
import axios from 'axios'
import Dashboard from './components/dashboard/Dashboard'
import MyProfile from './components/profile/MyProfile'
import Timetable from './components/dashboard/Timetable'

function App() {
  const [studentRolls, setStudentRolls] = useState([]);

  const fetchStudentRolls = async () => {
    try {
      const response = await axios.get('/api/student/rollnos');
      if (response.data) {
        setStudentRolls(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect( () => {
    fetchStudentRolls();
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:roll" element={<ERPMain/>}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="timetable" element={<Timetable />} />
            {/* <Route path="leave-request" element={<LeaveRequest />} />
            <Route path="result" element={<Result />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
