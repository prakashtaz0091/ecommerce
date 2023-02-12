import React from 'react'
import "./login.css"

const Login = () => {

    const [username,setUsername] = React.useState(null)
    const [password,setPassword] = React.useState(null)



  return (
    <div className='login-wrapper'>
        <div className="heading">LOGIN</div>
        <input type="text" placeholder='username' value={username} onChange />
        <input type="password" placeholder='password' />
        <button type="submit">Login</button>
    </div>
  )
}

export default Login