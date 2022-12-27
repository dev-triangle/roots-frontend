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
      <Link to='/'><p><a href="#home">Home</a></p></Link>
      <Link to='/'> <p><a href="#about">About</a></p></Link>
      <Link to='/places'> <p><a href="#destinations">Destinations</a></p></Link>
      <Link to='/guides'> <p><a href="#guides">Guides</a></p></Link>
      <Link to='/signup'><p><a href="login">Login</a></p></Link>
      </div>
    </div>
    <div className="home__navbar-sign">
      <p>Sign in</p>
      <Link to ='/signup'><button type="button">Sign up</button></Link>
    </div>
    <div className="home__navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="home__navbar-menu_container scale-up-center">
         <div className="home__navbar-links">
      
      <div className="home__navbar-links_container">
      <Link to='/'><p><a href="#home">Home</a></p></Link>
      <Link to='/'> <p><a href="#about">About</a></p></Link>
      <Link to='/places'> <p><a href="#destinations">Destinations</a></p></Link>
      <Link to='/guides'> <p><a href="#guides">Guides</a></p></Link>
      <Link to='/signup'><p><a href="login">Login</a></p></Link>
      </div>
>>>>>>> f3a332e623ad5621d8689e471495639893a00124
    </div>
    <div className="home__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
    </div>
      </div>
      )}
    </div>
  </div>


  )
}

export default Navbar