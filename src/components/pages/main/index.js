import React from 'react'
import Bg from '../../background/Bg'
import './Main.css'
import Navbar from './Navbar'
import { useState } from 'react'

const Main = () => {

  const [Punchname, setPunchname] = useState("Punch-In")


  const puncOut =() =>{
    if(Punchname === 'Punch-In')
    {

      setPunchname("Punch-out")
    }
    else if(Punchname === 'Punch-out')
    {
      setPunchname("Punch-In")
    }
    
  }
  return (
   <div className="mai-con">
    <div className="mai">
        <div className="gradient">
          <div className="profile"></div>
     <div className="name">
      <h2>Hi <span>Sakshi choudhry</span></h2>      
     </div><br></br>
     {/* <div className="sign-in">
     <i class="ri-login-circle-line"></i>
     </div> */}
     <button className={Punchname === 'Punch-In'?'punch-btn':'Punch-out'} onClick={puncOut}>{Punchname}</button>
         
        </div>
          <Navbar/>
    </div>

   </div>
  )
}

export default Main