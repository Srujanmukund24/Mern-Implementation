import React from 'react'
import { EmpContext } from '../../context/empContext'
import { useContext } from 'react'

const ApplicantHome = () => {
  const {emp}=useContext(EmpContext)
  return (
    <div className='formareasection'>

      {!!emp && (<h1> hi {emp.username}!</h1>)}
      
      "Your Logged iN Succesfully This Is Home page For the applicant Now here he/she can fill information and apply for job in varios listed Companies ."
    </div>
  )
}

export default ApplicantHome
