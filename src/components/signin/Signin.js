import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signin.css'


const logindata = {
  username: "sakshi",
  password: "sakshi123",
}

const Signin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
  const localData = localStorage.getItem("login") 
  if(localData=="y"){
    navigate("/home")
  }
  }, [])
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (username!=logindata.username){
      return alert("Invalid username")
    }
    else if (password!=logindata.password){
      return alert("Invalid password")
    }else{
      localStorage.setItem("login","y")
      navigate("/home")
    }
  }

  return (
    <div className="sig-main">
      <div className="top">
        <i class="ri-focus-fill"> <span>My Zen</span></i>

      </div>
      <div className="icon"><i class="ri-focus-fill"></i></div>
      <form onSubmit={onSubmit} >
        <label>User name</label><br></br>
        <input className='sign-input'   value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter user name...' /><br></br>
        <label>Passward</label><br></br>
        <input className='sign-input' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Passward' />
        <button className='sign-btn' type='submit'>Sign in</button>
        <a href="#">Forget Password</a>
      </form>
    </div>
  )
}

export default Signin