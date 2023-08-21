import axios from 'axios'
import { useState } from 'react'
import{toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './style/formarea.css'

const LoginEmp = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const loginEmployee=async(e)=>{
    e.preventDefault()
    const {email,password}=data
    try {
      const {data}=await axios.post('/loginemployee',{
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Logged IN Successfully");
        navigate('/ApplicantHome');
      }
    } catch (error) {
      
    }
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
