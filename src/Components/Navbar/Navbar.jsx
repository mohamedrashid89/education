import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [])

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  }

  return (
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={menu ? 'active' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-280} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-180} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="Icon" className='menu-icon' onClick={toggleMenu}/>
      </nav>
  )
}

export default Navbar