import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = ({ isActive, handleClick,handleClose }) => {

    return (
        <div style={{ "display": "flex" }}>
            <div className={isActive ? 'hide-side-bar' : 'side-bar'}>
                <i onClick={handleClick} class="ri-close-circle-fill"></i>
                <nav>
                    <li ><Link style={{textDecoration: 'none', display: 'flex'}} to="/" onClick={handleClose}><i class="ri-home-4-line"></i> <h5>Home</h5></Link></li>
                    <li><Link style={{textDecoration: 'none',display: 'flex'}} to="/timesheets" onClick={handleClose}><i class="ri-time-line"></i><h5>Timesheet</h5></Link></li>
                    <li><Link style={{textDecoration: 'none', display: 'flex'}} to="/myattendences" onClick={handleClose}><i class="ri-calendar-todo-line"></i><h5>My Attendence</h5></Link></li>
                    <li><Link style={{textDecoration: 'none',display: 'flex'}} to="/leaves" onClick={handleClose}><i class="ri-user-shared-2-fill"></i><h5>Leaves</h5></Link></li>
                    <li><Link style={{textDecoration: 'none',display: 'flex'}} to="/notes" onClick={handleClose}><i class="ri-map-line"></i><h5>Notes</h5></Link></li>
                </nav>

            </div>
        </div>
    )
}

export default Sidebar