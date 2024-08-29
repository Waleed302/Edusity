import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[]);
  const [mobileMenu, setmobileMenu] = useState(false)
  const ToggledMenu = ()=>{
  mobileMenu ? setmobileMenu (false):setmobileMenu(true)
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Link to ="hero" smooth ={true} duration ={500} offset={0} >  <img src={logo} alt="" className='logo' /></Link>
        <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
            <li><Link to ="hero" smooth ={true} duration ={500} offset={0} >Home</Link></li>
            <li><Link to ="program" smooth ={true} duration ={500} offset={-260} >Program</Link></li>
            <li><Link to ="about" smooth ={true} duration ={500} offset={-150} >About Us</Link></li>
            <li><Link to ="campus" smooth ={true} duration ={500} offset={-260} >Campus</Link></li>
            <li> <Link to ="testimonial" smooth ={true} duration ={500} offset={-260} >Testimonials</Link></li>
            <li><Link to ="contact" smooth ={true} duration ={500} offset={-230} className='btn'>Contact</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={ToggledMenu} />

    </nav>
  )
}

export default Navbar