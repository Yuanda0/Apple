import React from 'react'
import { NavLink } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/NavBar.css'
function NavBar() {
  return (
    <nav className='mainNav'>
      <NavLink to="/" className='links_apple'><AppleIcon /></NavLink>
      <NavLink to="/store" className='links'>Mağaza</NavLink>
      <NavLink to="/ipad" className='links'>Ipad</NavLink>
      <NavLink to="/iphone" className='links'>Iphone</NavLink>
      <NavLink to="/support" className='links'>Destek</NavLink>
    </nav>
  );
}

export default NavBar;