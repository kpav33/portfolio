import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
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
  // const { title } = data.site.siteMetadata

  // For particle animation background
  // https://www.npmjs.com/package/react-tsparticles

  return (
    <header id="top">
      {/* Turn it into a sticky header? */}
      <h1>
        <AnchorLink to="/">John Doe</AnchorLink>
      </h1>
      <nav className="links">
        <AnchorLink to="/#about" title="About me">
          About
        </AnchorLink>
        <AnchorLink to="/#featured" title="Featured Projects">
          Featured Projects
        </AnchorLink>
        <AnchorLink to="/#allProjects" title="All Projects">
          All Projects
        </AnchorLink>
        <AnchorLink to="/#contact" title="Contact">
          Contact
        </AnchorLink>
      </nav>
    </header>
  )
}
