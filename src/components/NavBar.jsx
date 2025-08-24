import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className='navBar'>
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : "navLink"}>Home</NavLink> | {" "}
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : "navLink"}>Favorites</NavLink>
    </nav>
  )
}

export default NavBar