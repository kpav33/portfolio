import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import { banner, btn, text, image } from "../styles/home.module.css"

export default function Banner() {
  return (
    <section className={banner}>
      <div className={text}>
        <h2>John Doe</h2>
        <h3>Web Developer</h3>
        {/* <p>UX designer &amp; web developer based in Machester.</p> */}
        {/* <Link className={btn} to="/projects">
          My Portfolio Projects
        </Link> */}
      </div>
      {/* <Img fluid={fluid} /> */}
      <div className={image}>
        <StaticImage src="../images/character-12.png" alt="Banner" />
      </div>

      {/* <p>
          {title} - {description}
        </p> */}
    </section>
  )
}
