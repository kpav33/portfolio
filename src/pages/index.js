import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/About"

import { about } from "../styles/about-me.module.css"
import {
  featured,
  featuredProject,
  name,
  description,
  additional,
  imageStyle,
  button,
} from "../styles/featured.module.css"
import {
  allProjects,
  projectsGrid,
  projectCard,
} from "../styles/all-projects.module.css"

export default function Home({ data }) {
  // If you were using the commented out page query, you would need to destructure { data } from component props
  // console.log(data)
  // const { title, description } = data.site.siteMetadata
  // const { fluid } = data.file.childImageSharp.fluid

  return (
    <Layout>
      <Banner />
      <About />
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
      <section className={allProjects}>
        <h2>All Projects</h2>
        <p>About all projects text</p>
        <div>Technology filter</div>
        <div className={projectsGrid}>
          <div className={projectCard}>
            <h3>Project name</h3>
            <div>Project image</div>
            <p>Project description</p>
            <div>Two buttons for project live and source code link</div>
            <div>Technologies used</div>
          </div>
          <div className={projectCard}>
            <h3>Project name</h3>
            <div>Project image</div>
            <p>Project description</p>
            <div>Two buttons for project live and source code link</div>
            <div>Technologies used</div>
          </div>
          <div className={projectCard}>
            <h3>Project name</h3>
            <div>Project image</div>
            <p>Project description</p>
            <div>Two buttons for project live and source code link</div>
            <div>Technologies used</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `

// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
