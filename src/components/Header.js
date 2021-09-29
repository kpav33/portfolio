import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Header() {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  // For particle animation background
  // https://www.npmjs.com/package/react-tsparticles

  return (
    <header>
      {/* Turn it into a sticky header? */}
      <h1>{title}</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Portfolio Projects</Link>
      </nav>
    </header>
  )
}
