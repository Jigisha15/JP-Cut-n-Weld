import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="team">
        <h1>Our Team</h1>
        <div className="team-top">
          <img
            className="imms"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZob-roOCV5Q54sF9k0oRrvRZ846yMMAtJg&usqp=CAU"
            alt=""
          />
          <img
            className="imms"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzkDw75fYc1bQlOb0k_D-legpY0ki6UN2fp94qGJk1_QQVM5ZzZGM70d2XwGPklPViS8&usqp=CAU"
            alt=""
          />
          <img
            className="imms"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzkDw75fYc1bQlOb0k_D-legpY0ki6UN2fp94qGJk1_QQVM5ZzZGM70d2XwGPklPViS8&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="past">
        <h1>Our Past</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          quos velit minima quod suscipit deserunt similique provident natus
          nihil! Quas deleniti earum ipsa maiores suscipit dolores velit
          inventore excepturi! Amet.
        </p>
      </div>
    </div>
  )
}

export default About
