import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, image } from "../styles/home.module.css"
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
      {/* Change name of header section into banner */}
      <section className={header}>
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
      <section className={about}>
        <h2>About me</h2>
        {/* Maybe add some subheaders depending on the paragraph text */}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          repellendus blanditiis voluptatem? Magnam, ipsa corrupti, neque ipsam
          dolorum deserunt eveniet odio atque magni accusamus molestias labore
          velit, doloribus ex sed!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam? Provident, rem mollitia eum cumque,
          fugit delectus qui, quia enim dicta deserunt minima voluptatum id.
        </p>
      </section>
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
