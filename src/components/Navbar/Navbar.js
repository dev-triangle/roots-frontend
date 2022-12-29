import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {RiCloseLine,RiMenu3Line } from "react-icons/ri";
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (

    // <div>
      
    //     <ul>
    //     <li><Link to='/'>Homepage</Link></li>
    //     <li><Link>About</Link></li>
    //     <li><Link to='/places'>Destinations</Link></li>
    //     <li><Link to='/guides'>Guides</Link></li>
    //     <li><Link to='/signup'>Signup/login</Link></li>
    //     </ul>
    // </div>
    <div className="home__navbar">
    <div className="home__navbar-links">
      
      <div className="home__navbar-links_container">
      <Link to='/'><p><a href="#">HOME</a></p></Link>
      <Link to='/'> <p><a href="#">ABOUT</a></p></Link>
      <Link to='/'> <p><a href="#">BLOG</a></p></Link>
      <Link to='/contact'> <p><a href="#t">CONTACT</a></p></Link>
      <Link to='/guide'><p><a href="#">GUIDE</a></p></Link>
      </div>
    </div>
    <div className="home__navbar-sign">

      <Link to ='/signup'><button type="button">SIGN UP</button></Link>
    </div>
    <div className="home__navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="home__navbar-menu_container scale-up-center">
         <div className="home__navbar-links">
      
      <div className="home__navbar-links_container">
      <Link to='/'><p><a href="#">HOME</a></p></Link>
      <Link to='/places'> <p><a href="#">DESTINATION</a></p></Link>
      <Link to='/'> <p><a href="#">BLOG</a></p></Link>
      <Link to='/contact'> <p><a href="#">CONTACT</a></p></Link>
      <Link to='/'><p><a href="#">LOGIN</a></p></Link>
      </div>

    </div>
    <div className="home__navbar-sign">
   
      <button type="button">SIGN UP</button>
    </div>
      </div>
      )}
    </div>
  </div>


  )
}

export default Navbar