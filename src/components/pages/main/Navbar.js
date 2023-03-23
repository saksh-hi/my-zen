import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Activity from './Activity'
import Logs from './Logs'
import Tasks from './Tasks'




const Navbar = () => {
  const [activeTab, setActiveTab] = useState("logs")
  return (
    <div className='navbar'>
      <nav>
        <li><button onClick={() => setActiveTab("logs")} style={{ textDecoration: 'none', color: "black" }} > Logs</button></li>



        <li><button onClick={() => setActiveTab("tasks")} style={{ textDecoration: 'none', color: "black" }}> Tasks</button></li>
        <li><button onClick={() => setActiveTab("activity")} style={{ textDecoration: 'none', color: "black" }}> Activity</button></li>

      </nav>
      {activeTab === "logs" ?
        <>
          <Logs />
        </>
        : activeTab === "tasks" ?
          <>
            <Tasks />
          </>
          : activeTab === "activity" ?
            <>
              <Activity />
            </>
            :
            <></>
      }
    </div>
  )
}

export default Navbar