import React from 'react'
// import MainLayout from '../../components/MainLayout/MainLayout'
// import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {
  return (
   
        <div className='contact__main'>
          <div className='page '>
            <p className='contact'>Contact</p>
            <p className='contact_byline'>we would love to hear from you</p>
            <p className='getin'>Get in touch</p>
            <p className='san'>@sanoshjacob</p>
          </div>

          <div className='page2 '>
           <div className='co_body'> <p className='contact_body'>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</p></div>
             <div className='contact_input'>
           
       <input className='co_input1' type='text'   placeholder='First name' required/>
       <input className='co_input3' type="text"   placeholder='Last name' required/>
       <input className='co_input2' type="text"   placeholder='E-mail' required/>
       <input className='co_input4' type="text"   placeholder='Subject' required/>
       <input className='co_input5' type="text" placeholder='Message' required/>
          
           </div>
          <div className='submit_body'><button  type='submit'  className='submit_button'>Submit</button></div> 
          </div>
        </div>
      
   
  )
}

export default Contact