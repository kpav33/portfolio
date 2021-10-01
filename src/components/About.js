import React from "react"
import { about } from "../styles/about-me.module.css"

export default function About() {
  return (
    <section className={about} id="about">
      <h2>About me</h2>
      {/* Maybe add some subheaders depending on the paragraph text */}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        repellendus blanditiis voluptatem? Magnam, ipsa corrupti, neque ipsam
        dolorum deserunt eveniet odio atque magni accusamus molestias labore
        velit, doloribus ex sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab sit
        doloremque vero velit quam? Provident, rem mollitia eum cumque, fugit
        delectus qui, quia enim dicta deserunt minima voluptatum id.
      </p>
    </section>
  )
}
