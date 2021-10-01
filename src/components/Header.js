import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Particles from "react-tsparticles"

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
      {/* Move options to a json file in util folder */}
      <Particles
        className="particles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              // bubble: {
              //   distance: 400,
              //   duration: 2,
              //   opacity: 0.8,
              //   size: 40,
              // },
              push: {
                quantity: 1,
              },
              // repulse: {
              //   distance: 200,
              //   duration: 0.4,
              // },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
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
