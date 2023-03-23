import React, { useState } from 'react'
import './style.css'
import { Modal, Button } from 'react-bootstrap'



const Notes = () => {
  const [isShow, invokeModal] = useState(false)
  const [yournote, setYournote] = useState("")
  const [bgcolor, setBgcolor] = useState("")
  const [localdb, setlocaldb] = useState([])


  const initModal = () => {
    return invokeModal(!isShow)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    invokeModal(!isShow)

    e.preventDefault();
    const obj = {
      id: localdb.length + 1,
      color: bgcolor,
      note: yournote
    }
    setlocaldb([...localdb, obj]);
    setYournote("") 
    setBgcolor("") 
  }

  return (
    <>
      <div className="mai-con">
        <div className="mai">
          <nav className="nav-note">
            <li>Notes(jotes)</li>
            <li><button onClick={initModal} >Add New Note</button></li>
          </nav>
          {localdb.map((obj, index) => (
            <div style={{backgroundColor:`${obj.color}`}} className="show-notes">
              {/* <button >Edit</button> */}
              {obj.note}
            </div>
          ))}
        </div>
      </div>

      <Modal className='w-75 h-100 position-absolute top-25 start-0' show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Enter Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea value={yournote} onChange={(e) => setYournote(e.target.value)} className='p-1 border-0' name="" id="" cols="60" rows="7" placeholder='Enter here'></textarea>
          {/* <input type="text" className='p-5 border-0'  /> */}
        </Modal.Body>
        <Modal.Footer>
        {/* Passing data in setBgcolor   */}
          <button style={{background:"#F28B82" }} className='note-btn' onClick={()=>setBgcolor("#F28B82")}> 
            
          </button>
          <button style={{background:"#B6CBED" }} className='note-btn' onClick={()=>setBgcolor("#B6CBED")}>
            
          </button>
          <button style={{background:"#CCFF90" }} className='note-btn' onClick={()=>setBgcolor("#CCFF90")}>
            
          </button>
          <Button variant="light text-secondary rounded-pill" onClick={initModal}>
            Close
          </Button>
          <Button variant="success rounded-pill pl-2" onClick={onSubmit}   >
            Save
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Notes