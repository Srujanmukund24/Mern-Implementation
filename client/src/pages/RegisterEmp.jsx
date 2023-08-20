import React from 'react'
import { useState } from 'react'
import './style/formarea.css'

const RegisterEmp = () => {

  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
  })

  const registerEmployee = (e) => {
    e.preventDefault()
  }
  return (
    <div className='formareasection'> 
      Register

      <form onSubmit={registerEmployee}>
        <label classNameName="form-label text-white" for="form3Example3"> Username</label>
        <input
          type="text"
          name="username"
          value={data.username} onChange={(e)=>setData({...data,username:e.target.value})}
          placeholder="Enter your username"
        />
        <label classNameName="form-label text-white" for="form3Example3"> Email address</label>
        <input
          type="email"
          name="email"
          value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}
          placeholder="Enter a valid email address"
        />
        <label classNameName="form-label text-white" for="form3Example4">Password</label>
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

export default RegisterEmp
