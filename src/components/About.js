import React from "react"
import { about } from "../styles/about-me.module.css"

export default function About() {
  return (
    <section className={about} id="about">
      <h2>About me</h2>
      {/* Maybe add some subheaders depending on the paragraph text */}
      <h3>Who am I?</h3>
      <p>
        Hello, I am Klemen Pavlovič, a self-taught web developer from Slovenia.
        I studied Informatics at Higher Vocational College in Novo mesto, which
        gave me a base of computer related knowledge and for the past year I
        have been additionaly studying about web development on my own.
      </p>
      <h3>What can I do?</h3>
      <p>
        In the past year I have worked part time for a Novo mesto based company
        ITI, for which I have either built or maintained several WordPress based
        websites for their clients. You can see the websites that I built for
        various clients by filtering all of my projects by WordPress in the All
        projects section down below.
      </p>
      <p>
        I have a year of experience with building web applications. I have
        focused my learning on React, which I used to complete the majority of
        my projects that you can see below. React is what I know best and work
        daily with.
      </p>
    </section>
  )
}
