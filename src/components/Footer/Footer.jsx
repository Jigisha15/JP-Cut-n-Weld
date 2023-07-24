import React from 'react'
import { Link } from 'react-router-dom'

import { HiPhone } from 'react-icons/hi'
import { BiLogoGmail } from 'react-icons/bi'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="left foot">
          <p>
            We're in this industry since a decade. We provide the best machines
            and a good serrvice alogn with a guaranteed maintainence.
          </p>
        </div>
        <div className="middle foot">
          <h1>Quick Contacts</h1>
          <span>
            <HiPhone /> : 123456789
          </span>
          <span>
            <BiLogoGmail /> : jpcnc@gmail.com
          </span>
        </div>
        <div className="right foot">
          <h1>Locate Us!</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0018856158354!2d72.84816747495645!3d19.15139474960176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64a9f3b67a9%3A0x28608ca94599266a!2sRam%20Mandir!5e0!3m2!1sen!2sin!4v1689864469859!5m2!1sen!2sin"
            width={200}
            height={150}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="dev">
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
