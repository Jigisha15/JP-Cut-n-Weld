import React from 'react'
import { Link } from 'react-router-dom'

import m1 from '../../assets/1.jpg'

import './Card.css'

const Card = () => {
  return (
    <>
      <Link
        className="card"
        to={'/info'}
      >
        <img
          className="card-image"
          src={m1}
          alt=""
        />
      </Link>
      <div className="card-text">card</div>
    </>
  )
}

export default Card
