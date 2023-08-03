import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import m1 from '../../assets/1.jpg'
import m2 from '../../assets/2.jpg'
import m3 from '../../assets/3.jpg'

import { TfiAngleRight } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'

import './LandingPage.css'

// const LandingPage = () => {
//   const carousel = [
//     {
//       id: 1,
//       image: m1,
//     },
//     {
//       id: 2,
//       image: m2,
//     },
//     {
//       id: 3,
//       image: m3,
//     },
//   ]

//   console.log(carousel)

//   const length = carousel.length
//   const [click, setClick] = useState(0)

//   const prevClick = () => {
//     setClick(click === length - 1 ? 0 : click + 1)
//   }

//   const nextClick = () => {
//     setClick(click === 0 ? length - 1 : click - 1)
//   }

//   const [num, setNum] = useState(0)
//   useEffect(() => {
//     if (num < 250) {
//       setNum((num) => num + 1)
//     } else {
//       setNum(num)
//     }
//   })

//   return (
//     <div className="landing-page">
//       <div className="landing-top">
//         <div className="intro">
//           <span className="s1">
//             Experience the best services from the most trusted
//           </span>
//           <span className="s2">JP Cut & Weld</span>
//         </div>
//         <div className="nums">
//           <div className="num1 num">
//             <p>Our count of happy customers is increasing everyday!</p>
//             <h1>{num}+</h1>
//           </div>
//           <div className="num2 num">
//             <p>Number of places we have provided services...</p>
//             <h1>{num}+</h1>
//           </div>
//           <div className="num3 num">
//             <p>
//               We strive to be better than yesterday and give the best than we
//               gave yesterday.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="landing-middle">
//         <div className="landing-left">
//           <button onClick={prevClick}>
//             <TfiAngleLeft />
//           </button>
//           {carousel.map((item, index) => (
//             <div
//               className={index === click ? 'carousel active' : 'carousel'}
//               key={index}
//             >
//               {index === click && (
//                 <img
//                   className="car-image"
//                   src={item.image}
//                   alt=""
//                 />
//               )}
//             </div>
//           ))}
//           <button onClick={nextClick}>
//             <TfiAngleRight />
//           </button>
//         </div>

//         <div className="landing-right">
//           <h1 className="right-one">
//             We have certified dealerships from a number of companies
//           </h1>
//           <h1 className="right-two">
//             Explore more of our products from the{' '}
//             <Link to={'/products'}>Products</Link> section{' '}
//           </h1>
//         </div>
//       </div>
//     </div>
//   )
// }

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>hello</h1>
    </div>
  )
}

export default LandingPage
