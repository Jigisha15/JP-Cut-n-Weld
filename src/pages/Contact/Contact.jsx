import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import bgi from '../../assets/contact-img.jpg'

import './Contact.css'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ien3edf',
        'template_tqhsfqu',
        form.current,
        'ZFF2ensoiVlBKbQoc'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  // return (
  //   <div className="big-container">
  //     <div className="image">
  //       <img
  //         src={bgi}
  //         alt=""
  //         className="contact-image"
  //       />
  //     </div>
  //     <div className="contact">
  //       <h1>Contact Us!</h1>
  //       <form
  //         ref={form}
  //         onSubmit={sendEmail}
  //         action=""
  //         method="post"
  //       >
  //         <div className="form-class">
  //           <input
  //             type="text"
  //             name="name"
  //           />
  //           <label htmlFor="name">Name</label>
  //         </div>
  //         <br />
  //         <div className="form-class">
  //           <input
  //             type="tel"
  //             name="phone"
  //           />
  //           <label htmlFor="phone">Contact number</label>
  //         </div>

  //         <br />
  //         <div className="form-class">
  //           <input
  //             type="email"
  //             name="email"
  //           />
  //           <label htmlFor="email">Email ID</label>
  //         </div>

  //         <br />
  //         <div className="form-class">
  //           <textarea
  //             rows={5}
  //             type="text"
  //             name="feedback"
  //           />
  //           <label htmlFor="feedback">Message</label>
  //         </div>

  //         <br />
  //         <button
  //           type="submit"
  //           value="Submit"
  //         >
  //           Submit
  //         </button>
  //         {/* <input
  //         type="submit"
  //         placeholder="Submit"
  //         style={{ padding: '5px 7px', fontSize: '15px', cursor: 'pointer' }}
  //       /> */}
  //       </form>
  //     </div>
  //   </div>
  // )

  return (
    <div className="contact">
      <div className="c-image">
        <img
          className="cim"
          src={bgi}
          alt=""
        />
      </div>
      <div className="contact-form">
        <h1>Hi</h1>
      </div>
    </div>
  )
}

export default Contact
