import React, { useState, useEffect } from "react"
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
  // Fix Gatsby SSR error when calling browser globals (window) in Node.js enviroment
  const isBrowser = typeof window !== "undefined"

  // Device width
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 1200)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [width])

  // console.log(width)

  return (
    <Layout width={width}>
      <Banner width={width} />
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
