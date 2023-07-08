import React, { useState } from 'react'

import m1 from '../../assets/1.jpg'
import m2 from '../../assets/2.jpg'
import m3 from '../../assets/3.jpg'

import { TfiAngleRight } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'

import './LandingPage.css'

const LandingPage = () => {
  const carousel = [
    {
      id: 1,
      image: m1,
    },
    {
      id: 2,
      image: m2,
    },
    {
      id: 3,
      image: m3,
    },
  ]

  console.log(carousel)

  const length = carousel.length
  const [click, setClick] = useState(0)

  const prevClick = () => {
    setClick(click === length - 1 ? 0 : click + 1)
  }

  const nextClick = () => {
    setClick(click === 0 ? length - 1 : click - 1)
  }

  return (
    <div className="landing-page">
      <div className="landing-left">
        <button onClick={prevClick}>
          <TfiAngleLeft />
        </button>
        {carousel.map((item, index) => (
          <div
            className={index === click ? 'carousel active' : 'carousel'}
            key={index}
          >
            {index === click && (
              <img
                className="car-image"
                src={item.image}
                alt=""
              />
            )}
          </div>
        ))}
        <button onClick={nextClick}>
          <TfiAngleRight />
        </button>
      </div>

      <div className="landing-right"></div>
    </div>
  )
}

export default LandingPage
