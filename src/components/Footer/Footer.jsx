import React from 'react'
import { Link } from 'react-router-dom'

import { BiCopyright } from 'react-icons/bi'
import { HiPhone } from 'react-icons/hi'
import { LiaMapSolid } from 'react-icons/lia'
import { BiLogoGmail } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io5'

import './Footer.css'

const Footer = () => {
  const handleClick = () => {
    alert("Thanks! We'll keep you updated!")
  }
  const handlePhone = () => {
    alert('Copy this number manually : 8108238874')
  }

  return (
    // <div className="footer">
    //   <div className="footer-main">
    //     <div className="left foot">
    //       <p>
    //         We're in this industry since a decade. We provide the best machines
    //         and a good serrvice alogn with a guaranteed maintainence.
    //       </p>
    //     </div>
    //     <div className="middle foot">
    //       <h1>Quick Contacts</h1>
    //       <span>
    //         <HiPhone /> : 123456789
    //       </span>
    //       <span>
    //         <BiLogoGmail /> : jpcnc@gmail.com
    //       </span>
    //     </div>
    //     <div className="right foot">
    //       <h1>Locate Us!</h1>
    //       <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0018856158354!2d72.84816747495645!3d19.15139474960176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64a9f3b67a9%3A0x28608ca94599266a!2sRam%20Mandir!5e0!3m2!1sen!2sin!4v1689864469859!5m2!1sen!2sin"
    //         width={200}
    //         height={150}
    //         style={{ border: 0 }}
    //         allowfullscreen=""
    //         loading="lazy"
    //         referrerpolicy="no-referrer-when-downgrade"
    //       ></iframe>
    //     </div>
    //   </div>
    //   <div className="dev">
    //     Developed by :{' '}
    //     <Link
    //       className="dev-name"
    //       to="https://portfolio-jigisha15.vercel.app/"
    //       target="_blank"
    //     >
    //       Jigisha Ghanekar
    //     </Link>
    //   </div>
    // </div>

    <div className="footer">
      <div className="footer-texts">
        <div className="left-f-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nobis dolor commodi temporibus quo, ea et consequuntur quis ad non
          doloribus, optio recusandae dolore ipsa sequi suscipit in voluptates
          laudantium necessitatibus cumque nulla! Assumenda atque error, ratione
          aut reprehenderit deleniti!
        </div>
        <div className="middle-f-text">
          <h1>Want to recieve Notification Email from us to stay updated?</h1>
          <button onClick={handleClick}>YES</button>
        </div>
        <div className="right-f-text">
          <h1>Office Address</h1>
          <p>
            Business Complex, Nr Petrol Pump, IB Patel Road, Goregaon(E),
            Mumbai-400063
          </p>
          <span className="f-span">
            {/* <button
              value="8108238874"
              onClick={handlePhone}
            > */}
            <HiPhone
              color="#b1d0fe"
              size={14}
              value="8108238874"
            />
            {/* </button> */}
            <IoLogoWhatsapp color="#25D366" />
            <BiLogoGmail color="blue" />
            <LiaMapSolid color="red" />
          </span>
        </div>
      </div>
      <div className="copyright">
        <BiCopyright /> Copyrights Reserved
      </div>
      <div className="developer">
        Developed by :{' '}
        <Link
          className="dev-name"
          to="https://portfolio-jigisha15.vercel.app/"
          target="_blank"
        >
          Jigisha Ghanekar
        </Link>
      </div>
    </div>
  )
}

export default Footer
