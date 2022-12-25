import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/places'>Destinations</Link></li>
        <li><Link to='/guides'>Guides</Link></li>
        <li><Link to='/signup'>Signup/login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar