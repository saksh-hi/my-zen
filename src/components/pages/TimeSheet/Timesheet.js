import React from 'react'
import './style.css'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

const Timesheet = () => {



  return (

    <div className="mai">
      <div className="mai-con">
        <div className="time-nav">
          <div className="nav-left">Project Status</div>


          <div className="date-picker">
            <div className="ico">
              <i class="ri-calendar-2-line"></i></div>


            <DateRangePicker
              initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}>

              <input type="text" className="form-control" />
            </DateRangePicker>
          </div>
        </div>
        <div className="not-found"><i class="ri-file-forbid-fill"></i>
          <h5>File not Found</h5></div>
      </div>
    </div>
  )
}

export default Timesheet