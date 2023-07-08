import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const [home, setHome] = useState(false)
  const handleHome = () => {
    setHome(!home)
  }

  const [about, setAbout] = useState(false)
  const handleAbout = () => {
    setAbout(!about)
  }

  const [contact, setContact] = useState(false)
  const handleContact = () => {
    setContact(!contact)
  }

  const [product, setProduct] = useState(false)
  const handleProduct = () => {
    setProduct(!product)
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            onClick={handleHome}
            className="nav-li"
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleAbout}
            className="nav-li"
            to={'/about'}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleProduct}
            className="nav-li"
            to={'/product'}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleContact}
            className="nav-li"
            to={'/contact'}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
