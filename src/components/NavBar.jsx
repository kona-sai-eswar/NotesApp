import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/home">Home</NavLink> | {" "}
        <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  )
}

export default NavBar