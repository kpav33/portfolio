import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/About"
import FeaturedProjects from "../components/FeaturedProjects"
import AllProjects from "../components/AllProjects"

export default function Home({ data }) {
  // If you were using the commented out page query, you would need to destructure { data } from component props
  // console.log(data)
  // const { title, description } = data.site.siteMetadata
  // const { fluid } = data.file.childImageSharp.fluid

  return (
    <Layout>
      <Banner />
      <About />
      <FeaturedProjects />
      <AllProjects />
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
