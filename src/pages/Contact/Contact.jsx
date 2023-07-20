import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

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

  return (
    <div className="contact">
      <h1>Contact Us!</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        method="post"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
        />
        <br />
        <label htmlFor="phone">Contact number</label>
        <input
          type="tel"
          name="phone"
        />
        <br />
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
        />
        <br />
        <label htmlFor="feedback">Message</label>
        <textarea
          rows={5}
          type="text"
          name="feedback"
        />
        <br />
        <button
          type="submit"
          value="Submit"
        >
          Submit
        </button>
        {/* <input
          type="submit"
          placeholder="Submit"
          style={{ padding: '5px 7px', fontSize: '15px', cursor: 'pointer' }}
        /> */}
      </form>
    </div>
  )
}

export default Contact
