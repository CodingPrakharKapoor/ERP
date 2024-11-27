import React,{useState, useEffect} from 'react'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'

function ERPMain() {
  const {roll} = useParams();
  const [studentData, setStudentData] = useState({});

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(`/api/student/${roll}`);
      if (response.data) {
        setStudentData(response.data);
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
        <Navbar studentData={studentData}/>
        <div className="flex">
        <Sidebar />
        <div>
          <Outlet/>
        </div>
      </div>

    </>
  )
}

export default ERPMain;