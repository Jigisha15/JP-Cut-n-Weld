import React from 'react'
import './Card.css'
import img1 from '../../assets/10.jpg'
// import products from '../../data/products.js'
import { Link } from 'react-router-dom'

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={img1}
        alt=""
      />
      <h3 className="card-text">Machine 1</h3>
      <Link className="specs">View Specifications</Link>
    </div>
  )
}

export default Card
