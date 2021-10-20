import React, { useState, useEffect } from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Header({ width }) {
  // const data = useStaticQuery(graphql`
  //   query SiteTitle {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // const { title } = data.site.siteMetadata
  // console.log(particlesOptionsObject)
  // For particle animation background
  // https://www.npmjs.com/package/react-tsparticles

  // Show or hide mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Track Y offset
  const [offsetY, setOffsetY] = useState(0)

  function handleScroll() {
    const position = window.pageYOffset
    setOffsetY(position)
  }

  useEffect(() => {
    const position = window.pageYOffset
    setOffsetY(position)
  }, [])

  // Change header to sticky header if user is scrolling down and is no longer on top of the page
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollClass = offsetY > 0 ? "headerScroll" : null

  return (
    <>
      <header id="top" className={scrollClass}>
        <h1 onClick={() => setShowMobileMenu(false)}>
          <AnchorLink to="/">Klemen Pavlovič</AnchorLink>
        </h1>
        {/* Desktop Navigation menu */}
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
      </header>
      {/* Mobile Navigation menu */}
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
                <span onClick={() => setShowMobileMenu(false)}>About</span>
              </AnchorLink>
              <AnchorLink to="/#featured" title="Featured Projects">
                <span onClick={() => setShowMobileMenu(false)}>
                  Featured Projects
                </span>
              </AnchorLink>
              <AnchorLink to="/#allProjects" title="All Projects">
                <span onClick={() => setShowMobileMenu(false)}>
                  All Projects
                </span>
              </AnchorLink>
              <AnchorLink to="/#contact" title="Contact">
                <span onClick={() => setShowMobileMenu(false)}>Contact</span>
              </AnchorLink>
            </nav>
          )}
        </div>
      )}
    </>
  )
}
