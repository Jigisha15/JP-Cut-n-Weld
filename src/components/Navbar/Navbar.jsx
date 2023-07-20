import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            className="nav-li"
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/services'}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/product'}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/contact'}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/about'}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
