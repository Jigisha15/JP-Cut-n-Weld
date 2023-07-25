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
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/services'}
          >
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/product'}
          >
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/contact'}
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li"
            to={'/about'}
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
