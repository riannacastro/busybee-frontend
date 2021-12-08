import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <NavLink 
                to="/home" 
                className={isActive => isActive ? "selected" : ""}>
            Home</NavLink>
            <NavLink 
                to="/important"
                className={isActive => isActive ? "selected" : ""}>
            Important Tasks</NavLink>
            <NavLink 
                to="/finished"
                className={isActive => isActive ? "selected" : ""}>
            Finished Tasks</NavLink>
        </div>
    )
}
