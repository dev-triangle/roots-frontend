import React from 'react'
import './Guides.css'

const Guides = () => {
  return (
   
  

    <div className='guide_main'>
      
        <div className='guide_img'></div>
        <p className='g_heading'>Book With Us Today</p>
        <div className='g_container'>
          <div className='g_dot1'></div><p className='gl_dot1'>One way</p><div className='g_dot2'></div><p className='gl_dot2'>Round trip</p>
        <input className='gu_input1' type='text'  placeholder='Leaving from...' required/>
       <input className='gu_input2' type="text"   placeholder='Going to...' required/>
       <input className='gu_input3' type="text" onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} placeholder='Depart' required/>
       <input className='gu_input4' type="text" onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}   placeholder='Return' required/>
       <input className='gu_input5' type="number"   placeholder='Passengers' required/>
       <input className='gu_input6' type="text"   placeholder='Class' required/>
       
         <button className='g_button'>Search Available Flights</button>
        </div>
    </div>
  )
}

export default Guides