import React from 'react'
import Bg from '../../background/Bg'
import ReactSpeedometer from "react-d3-speedometer"

const Activity = () => {
  return (
    <>

     <ReactSpeedometer 
     width={250}
     height={250}   
    
  // value={100}
  segments={4}
  segmentColors={[
    "#FF647C",
    "#FFB800",
    "#0052CC",
    "#3BC171",   
  ]}
  /> 
  <div className="time-sec">
   <nav>
   <div>
   <i class="ri-timer-2-fill" style={{ background:"#FF647C"}} ></i>
   <container>
    <h2>00:00</h2>
    <span>Working time</span>
   </container>
   </div>
   <div>
  
   <i class="ri-rest-time-line" style={{ background:"#475DDB"}}></i>
   <container>
    <h2>00:00</h2>
    <span>Idle Time</span>
   </container>
   </div>
   <div>
   <i class="ri-alarm-line" style={{ background:"#3BC171"}}></i>
   <container>
    <h2>00:00</h2>
    <span>Active Time</span>
   </container>
   </div>

   </nav>
  </div>
 
  
    </>
  )
}

export default Activity