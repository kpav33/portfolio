import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { banner, text, image, particles } from "../styles/home.module.css"
import Particles from "react-tsparticles"
import { particlesOptionsObject } from "../utils/particlesOptionsObject"

export default function Banner({ width }) {
  return (
    <section className={banner}>
      {width > 100 && (
        <Particles className={particles} options={particlesOptionsObject} />
      )}
      <div className={text}>
        <h2>Klemen Pavlovič</h2>
        <h3>Web Developer</h3>
      </div>
      {width > 600 && (
        <div className={image}>
          <StaticImage src="../images/character-12.png" alt="Banner" />
        </div>
      )}
    </section>
  )
}
