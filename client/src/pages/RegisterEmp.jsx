import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate} from 'react-router-dom'
import './style/formarea.css'

const RegisterEmp = () => {

  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
  })

  const navigate=useNavigate();
  const registerEmployee = async(e) => {
    e.preventDefault();
    const {username,email,password}=data
    try {
      const {data}=await axios.post('/registeremployee',{
        username,email,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        toast.success("Registered Successfully!");
        navigate('/EmployeeLogin');
      }    
  
    } catch (error) {
      
    }
  }
  return (
    <div className='formareasection'> 
      Register

      <form onSubmit={registerEmployee}>
        <label className="form-label text-white" > Username</label>
        <input
          type="text"
          name="username"
          value={data.username} onChange={(e)=>setData({...data,username:e.target.value})}
          placeholder="Enter your username"
        />
        <label className="form-label text-white" > Email address</label>
        <input
          type="email"
          name="email"
          value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}
          placeholder="Enter a valid email address"
        />
        <label className="form-label text-white" >Password</label>
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
