import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
// import MainLayout from '../../components/MainLayout/MainLayout'
// import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {
  return (
    <MainLayout>
        <div className='su__main'>
          <div className="su__blank_space">
            <p className='Contact'>Contact</p>
            <p className='contact_byline'>we would love to hear from you</p>
            <p className='getin'>Get in touch</p>
            <p className='san'>@sanoshjacob</p>
          </div>

          <div className="su__form_container"> 
                <p className='contact_heading'>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</p>
        
                <div className='contact_body'>
              
                  <input className='co_input' type='text'   placeholder='First name' required/>
                  <input className='co_input' type="text"   placeholder='Last name' required/>
                  <input className='co_input' type="text"   placeholder='E-mail' required/>
                  <input className='co_input' type="text"   placeholder='Subject' required/>
                  <input className='co_inputm' type="text" placeholder='Message' required/>
                      
                </div>
               <div className='submit_button' type='submit'>Submit</div> 
          </div>
        </div>
    </MainLayout>
  )
}

export default Contact