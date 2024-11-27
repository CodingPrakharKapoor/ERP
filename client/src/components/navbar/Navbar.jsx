import React from 'react'

function Navbar({studentData}) {
  return (
    <>
    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">ERP Management</div>
      <div className="flex items-center space-x-4">
        <a href="/" className="text-md hover:underline">Home</a>
        <a href="/profile" className="text-md hover:underline">Profile</a>
        <a href="/logout" className="text-md hover:underline">Logout</a>
        <div className="text-md bg-white text-green-500 px-2 py-1 rounded">{studentData.studentName}</div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
