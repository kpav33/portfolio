import React from "react"
import {
  featured,
  featuredProject,
  name,
  description,
  additional,
  imageStyle,
  button,
} from "../styles/featured.module.css"

export default function FeaturedProjects() {
  return (
    <section className={featured}>
      <h2>Featured Projects</h2>
      <div className={featuredProject}>
        <h3 className={name}>Project name</h3>
        <p className={description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <p className={additional}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <div className={imageStyle}>Project Image</div>
        <button className={button}>Read More</button>
      </div>
      <div className={featuredProject}>
        <h3 className={name}>Project name</h3>
        <p className={description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <p className={additional}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <div className={imageStyle}>Project Image</div>
        <button className={button}>Read More</button>
      </div>
    </section>
  )
}
