import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoginEmployee from './pages/LoginEmp'
import RegisterEmployee from './pages/RegisterEmp'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import ApplicantHome from './pages/ApplicantHome'
import {EmpContextProvider}  from '../context/empContext'

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <EmpContextProvider>
    <>
    <Navbar/>
    <Toaster position='top-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/EmployeeLogin' element={<LoginEmployee/>}></Route>
      <Route path='/EmployeeRegister' element={<RegisterEmployee/>}></Route>
      <Route path='/ApplicantHome' element={<ApplicantHome/>}></Route>
    </Routes>
    </>
    /* </EmpContextProvider> */
  );
}

export default App
