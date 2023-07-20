import React from 'react'
import './Card.css'
import products from '../../data/products.js'
import { Link } from 'react-router-dom'

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <h3>{text}</h3>
    </div>
  )
}

export default Card
