<<<<<<< Updated upstream
=======
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div className="bg-green-100 w-1/6 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="text-green-700 hover:text-green-900">Dashboard</Link>
        </li>
        <li>
          <Link to="profile" className="text-green-700 hover:text-green-900">My Profile</Link>
        </li>
        <li>
          <Link to="timetable" className="text-green-700 hover:text-green-900">TimeTable</Link>
        </li>
        <li>
          <Link to="/leave-request" className="text-green-700 hover:text-green-900">Leave Request</Link>
        </li>
        <li>
          <Link to="/result" className="text-green-700 hover:text-green-900">Result</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar
>>>>>>> Stashed changes
