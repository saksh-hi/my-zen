import React from 'react'
import './Bg.css'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Topnavbar from '../Topnavbar'
import Timesheet from '../pages/TimeSheet/Timesheet'
import Myattendence from '../pages/Myattendence/Myattendence'
import Main from '../pages/main'
import Leave from '../pages/leave'
import Notes from '../pages/Notes'


const Bg = ({ page }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
  }
  const handleClose = event => {
    setIsActive(current => !current);
  }

  return (
    <div className="home-main">
      <>
        <div className='bg-main'>
          <div className="top-bg">
            <i class="ri-focus-fill"></i>
            <span>My Zen</span>
          </div>
          <Topnavbar handleClose={handleClose}/>
          <Sidebar isActive={isActive} handleClose={handleClose} handleClick={handleClick} />
          {
            page == "Timesheet" ? <Timesheet /> : page == "Myattendence" ? <Myattendence />  : page == "Note" ? <Notes />
            : page == "Leave" ? <Leave />
            : page=="main" ? <Main /> :""
          }
        </div>
        </>
    </div>
  )
}

export default Bg