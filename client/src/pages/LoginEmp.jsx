import axios from 'axios'
import { useState } from 'react'
import './style/formarea.css'

const LoginEmp = () => {

  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const loginEmployee=(e)=>{
    e.preventDefault()
    axios.get('/')
  }
  return (
    <div className="formareasection"> 
      Login
      
      <form onSubmit={loginEmployee}>
      <label className="form-label " for="form3Example3"> Email address</label>
        <input
          type="email"
          name="email"
          value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}
          placeholder="Enter a valid email address"
        />
        <label className="form-label " for="form3Example4">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default LoginEmp
