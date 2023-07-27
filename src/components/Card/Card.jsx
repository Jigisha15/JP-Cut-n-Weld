import React from 'react'
import './Card.css'
import img1 from '../../assets/10.jpg'
// import products from '../../data/products.js'
import { Link } from 'react-router-dom'

const Card = ({ to, text }) => {
  return (
    <Link
      className="card"
      to={to}
    >
      <h3 className="card-text">{text}</h3>
      <p>Click to view more products</p>
    </Link>
  )
}

export default Card
