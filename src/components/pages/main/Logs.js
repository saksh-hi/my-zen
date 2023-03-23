import React from 'react'
import { useState } from 'react';
import Bg from '../../background/Bg';
import './Main.css'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import Navbar from './Navbar';


const Logs = () => {
  const [isShow, invokeModal] = useState(false)
  const [startDate, setStartDate] = useState(new Date());

  const initModal = () => {
    return invokeModal(!isShow)
  }

  return (
    <>

 <li><button className='log-btn' onClick={initModal} ><i class="ri-add-line"></i>Past Activity</button></li>  

      
      <Modal className='w-100 "w-100 p-3" position-absolute top-25 start-0' show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Create Past Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-secondary'>
          {/* <textarea  className='p-1 border-0' name="" id="" cols="60" rows="7" placeholder='Enter here'></textarea> */}
        {/* <input type="text" className='p-5 border-0'  /> */}
        <label>Tasks</label><br></br>
        <input className='text-secondary px-5 p-2 container mb-3 rounded border-secondary'  type="text" placeholder='Select Tasks' /><br></br>
        <label className='mb-3' > Project :-</label><br></br>
        <label className='mb-3' > Start :-</label><br></br>
        <label className='mb-3'>Due :-</label><br></br>
        <label className='mb-3'>Start :-</label><br></br>
       <div className="d-flex justify-content-between">
       <DatePicker className=' border-secondary text-secondary ' selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <label className='mb-3'>End Dates</label> */}
        <DatePicker className=' border-secondary text-secondary ' selected={startDate} onChange={(date) => setStartDate(date)} />
       </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light text-secondary rounded-pill" onClick={initModal}>
            Close
          </Button>
          <Button variant="success rounded-pill pl-2"   >
            Save
          </Button>
        </Modal.Footer>
      </Modal>  
   </>

  )
}

export default Logs;