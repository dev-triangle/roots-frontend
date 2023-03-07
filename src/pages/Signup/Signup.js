import React, { useState } from 'react'
import './Signup.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import axios from 'axios'
import { baseUrl } from '../../utils/urls'
import { useNavigate } from 'react-router-dom'
import CustomTitle from '../../utils/CustomTitle'
const Signup = () => {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${baseUrl}/register/`,{
      username:username,
      password:password,
      email:email
    }).then(response=>{
      // console.log(response)
      if(response.status===201){
        navigate('/login')
      }
    },error=>{
      // console.log(error)
    })
  }
  return (
    <MainLayout>
      <CustomTitle title="Signup"/>
      <div className='su__main'>
        <div className="su__blank_space">

        </div>
        <div className="su__form_container">
          <p className='su__welcome_text'>Welcome</p>
          <p className='su__and_continue'>Sign up and continue</p>
          <form className='su__main_form' onSubmit={handleSubmit}>
            <input value={email} className='su__input_taker' placeholder='email'type="text" onChange={(e)=>{setEmail(e.target.value)}} />
            <input value={username} className='su__input_taker'placeholder='username' type="text" onChange={(e)=>{setUsername(e.target.value)}} />
            <input value={password} className='su__input_taker' placeholder='password'type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit' className='su__submit_button'>Sign Up</button>
          </form>
        </div>
      </div>
    </MainLayout>
    
  )
}

export default Signup