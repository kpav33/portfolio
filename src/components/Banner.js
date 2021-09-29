import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import { banner, btn } from "../styles/home.module.css"

export default function Banner() {
  return (
    <section className={banner}>
      <div>
        <h2>Design</h2>
        <h3>Develop &amp; Deploy</h3>
        <p>UX designer &amp; web developer based in Machester.</p>
        <Link className={btn} to="/projects">
          My Portfolio Projects
        </Link>
      </div>
      {/* <Img fluid={fluid} /> */}
      <StaticImage src="../images/banner.png" alt="Banner" />
      {/* <p>
          {title} - {description}
        </p> */}
    </section>
  )
}
