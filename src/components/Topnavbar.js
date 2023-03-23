import React from 'react'

const Topnavbar = ({handleClose}) => {
    return (
        <div className="nav-bar">
            <nav className='nav1'>
                <div className='close'><i onClick={handleClose} class="ri-menu-fill"></i></div>

                <div className='red'><i class="ri-focus-fill"></i></div>
            </nav>
            <nav className='nav2'>
                <div><i class="ri-focus-2-fill"></i></div>
                <div><i class="ri-user-smile-line"></i><span>Take a break</span></div>
                <div><i class="ri-sticky-note-fill"></i></div>
                <i class="ri-account-pin-circle-line"></i>
            </nav>
        </div>
    )
}
export default Topnavbar