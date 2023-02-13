import React from 'react'
import { VisibilityIcon, VisibilityOffIcon } from '../../mui/exports'
import { useNavigate } from "react-router-dom";

import {  useDispatch } from 'react-redux'
import { loggedIn } from '../../../redux/user/userSlice'
import "./login.css"

const Login = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [role,setRole] = React.useState("customer")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [visible,setVisible] = React.useState(false)
  const [inputType, setInputType] = React.useState("password")
  function toggleVisibility() {
    if(visible) {
      setInputType("password")
      setVisible(false)
    }
    else {
      setInputType("text")
      setVisible(true)
    }
    
  }

  function handleLogin() {
    dispatch(loggedIn({username,role}))
    navigate("/")
  }

  return (
    <div className='login-wrapper'>
      <div className="heading">LOGIN</div>
      <select name="" id="role" value={role} onChange={e=>setRole(e.currentTarget.value)} >
        <option value="customer" >Customer</option>
        <option value="admin">Admin</option>
      </select>
      <input type="text" placeholder='username' required value={username} onChange={e => setUsername(e.currentTarget.value)} />
      <div className="row">
        <input type={inputType} required placeholder='password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <button className='reset-btn' onClick={toggleVisibility}>
          {
            visible? <VisibilityOffIcon/>:<VisibilityIcon/>
          }
        </button>
      </div>
      <button type="submit" onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login