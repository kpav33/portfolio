import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Particles from "react-tsparticles"
import { particlesOptionsObject } from "../utils/particlesOptionsObject"

export default function Header({ width }) {
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
  // console.log(particlesOptionsObject)
  // For particle animation background
  // https://www.npmjs.com/package/react-tsparticles

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  // console.log(showMobileMenu)

  const [offsetY, setOffsetY] = useState(0)

  function handleScroll() {
    const position = window.pageYOffset
    setOffsetY(position)
  }
  // console.log(offsetY)

  useEffect(() => {
    const position = window.pageYOffset
    setOffsetY(position)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollClass = offsetY > 0 ? "headerScroll" : null
  // console.log(scrollClass)

  return (
    <>
      <header id="top" className={scrollClass}>
        {/* Turn it into a sticky header? */}
        {/* <Particles className="particles" options={particlesOptionsObject} /> */}
        <h1>
          <AnchorLink to="/">John Doe</AnchorLink>
        </h1>
        {width > 600 && (
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
        )}
        {/* {width < 600 && (
          <div className="mobileWrapper">
            <button
              className="menuIcon"
              style={{ top: offsetY !== 0 ? "0px" : "8px" }}
            >
              <div />
              <div />
              <div />
            </button>
          </div>
        )} */}
      </header>
      {width < 600 && (
        <div className="mobileWrapper">
          <button
            className={showMobileMenu ? "menuIcon mobileClicked" : "menuIcon"}
            style={{ top: offsetY !== 0 ? "0px" : "8px" }}
            onClick={() => setShowMobileMenu(prevState => !prevState)}
          >
            <div />
            <div />
            <div />
          </button>
          {showMobileMenu && (
            <nav className="mobileNav">
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
          )}
        </div>
      )}
    </>
  )
}
