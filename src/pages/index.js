import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, image } from "../styles/home.module.css"
import { about } from "../styles/about-me.module.css"

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
      <section>Featured projects</section>
      <section>All projects</section>
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
