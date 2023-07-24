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
    <>
      <h1 className="contact-title">Contact Us!</h1>
      <div className="contact">
        <div className="c-image"></div>
        <div className="contact-form">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            method="post"
          >
            <div className="form-class">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-class">
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                required
              />
            </div>

            <div className="form-class">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required
              />
            </div>

            <div className="form-class">
              <textarea
                rows={5}
                type="text"
                name="feedback"
                placeholder="Message / Feedback"
                required
              />
            </div>

            <button
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
