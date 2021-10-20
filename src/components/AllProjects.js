import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  allProjects,
  technologyFilter,
  projectsGrid,
  projectCard,
  projectLinks,
  technologyCards,
  container,
} from "../styles/all-projects.module.css"

import ReactLogo from "../images/logos/react-logo.svg"
import StyledLogo from "../images/logos/styled-components-logo.svg"
import SassLogo from "../images/logos/sass-logo.svg"
import TypeScriptLogo from "../images/logos/typescript-logo.svg"
import ReactTestingLogo from "../images/logos/react-testing-library-logo.png"
import CssLogo from "../images/logos/css3-logo.svg"
import D3Logo from "../images/logos/d3-logo.svg"
import GatsbyLogo from "../images/logos/gatsby-logo.svg"
import HtmlLogo from "../images/logos/html5-logo.svg"
import JavaScriptLogo from "../images/logos/javascript-logo.svg"
import MaterialLogo from "../images/logos/material-ui-logo.svg"
import ReactRouterLogo from "../images/logos/react-router-logo.svg"
import WordpressLogo from "../images/logos/wordpress-logo.svg"
import CssModulesLogo from "../images/logos/css-modules-logo.svg"
import FirebaseLogo from "../images/logos/firebase-logo.svg"

export default function AllProjects() {
  const data = useStaticQuery(graphql`
    query ProjectsData {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            description
            sourceCodeURL
            liveURL
            slug
            date
            workInProgress
            technologies
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          id
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  // Filter by selected tool
  const [filter, setFilter] = useState("All")

  return (
    <section className={allProjects} id="allProjects">
      <h2>All Projects</h2>
      <p>
        Below are all the projects that I have completed so far. Click on a tool
        button to only see the projects where I used that particular tool.
      </p>
      <div className={technologyFilter}>
        <button onClick={() => setFilter("WordPress")}>
          <img
            width="35px"
            height="35px"
            src={WordpressLogo}
            alt={"WordPress"}
          />
          <span>WordPress</span>
        </button>
        <button onClick={() => setFilter("React Testing Library")}>
          <img
            width="35px"
            height="35px"
            src={ReactTestingLogo}
            alt={"React Testing Library"}
          />
          <span>React Testing Library</span>
        </button>
        <button onClick={() => setFilter("React Router")}>
          <img
            width="35px"
            height="35px"
            src={ReactRouterLogo}
            alt={"React Router"}
          />
          <span>React Router</span>
        </button>
        <button onClick={() => setFilter("Firebase")}>
          <img width="35px" height="35px" src={FirebaseLogo} alt={"Firebase"} />
          <span>Firebase</span>
        </button>
        <button onClick={() => setFilter("Gatsby")}>
          <img width="35px" height="35px" src={GatsbyLogo} alt={"Gatsby"} />
          <span>Gatsby</span>
        </button>
        <button onClick={() => setFilter("D3")}>
          <img width="35px" height="35px" src={D3Logo} alt={"D3.js"} />
          <span>D3.js</span>
        </button>
        <button onClick={() => setFilter("HTML")}>
          <img width="35px" height="35px" src={HtmlLogo} alt={"HTML"} />
          <span>HTML</span>
        </button>
        <button onClick={() => setFilter("CSS")}>
          <img width="35px" height="35px" src={CssLogo} alt={"CSS"} />
          <span>CSS</span>
        </button>
        <button onClick={() => setFilter("JavaScript")}>
          <img
            width="35px"
            height="35px"
            src={JavaScriptLogo}
            alt={"JavaScript"}
          />
          <span>JavaScript</span>
        </button>
        <button onClick={() => setFilter("Styled Components")}>
          <img
            width="35px"
            height="35px"
            src={StyledLogo}
            alt={"Styled Components"}
          />
          <span>Styled Components</span>
        </button>
        <button onClick={() => setFilter("CSS Modules")}>
          <img
            width="35px"
            height="35px"
            src={CssModulesLogo}
            alt={"CSS Modules"}
          />
          <span>CSS Modules</span>
        </button>
        <button onClick={() => setFilter("Sass")}>
          <img width="35px" height="35px" src={SassLogo} alt={"Sass"} />
          <span>Sass</span>
        </button>
        <button onClick={() => setFilter("Material UI")}>
          <img
            width="35px"
            height="35px"
            src={MaterialLogo}
            alt={"Material UI"}
          />
          <span>Material UI</span>
        </button>
        <button onClick={() => setFilter("React")}>
          <img width="35px" height="35px" src={ReactLogo} alt={"React"} />
          <span>React</span>
        </button>
        <button onClick={() => setFilter("TypeScript")}>
          <img
            width="35px"
            height="35px"
            src={TypeScriptLogo}
            alt={"TypeScript"}
          />
          <span>TypeScript</span>
        </button>
        <button onClick={() => setFilter("All")}>All projects</button>
      </div>
      {/* Catch errors in case something breaks!!! */}
      <div className={projectsGrid}>
        {nodes
          .filter(project => {
            if (filter === "All") {
              return project
            } else if (project.frontmatter.technologies.includes(filter)) {
              return project
            } else {
              // Remove this?
              return null
            }
          })
          .map(project => (
            <div className={projectCard} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <div className={container}>
                <GatsbyImage
                  image={getImage(project.frontmatter.image)}
                  alt="Banner"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <p>
                {project.frontmatter.description}
                {project.frontmatter.workInProgress && (
                  <strong>Work in progress...</strong>
                )}
              </p>
              <div className={projectLinks}>
                <a href={project.frontmatter.liveURL}>Project live</a>
                {project.frontmatter.sourceCodeURL ? (
                  <a href={project.frontmatter.sourceCodeURL}>Source code</a>
                ) : (
                  <p>Private Repo</p>
                )}
              </div>
              <div className={technologyCards}>
                {project.frontmatter.technologies.map((item, index) => (
                  <div key={index}>
                    <img
                      width="35px"
                      height="35px"
                      src={technologyImage(item)}
                      alt={item}
                      title={item}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

// Show appropriate image of the tool used based on the array of technologies from project markdown frontmatter
function technologyImage(name) {
  switch (name) {
    case "React":
      return ReactLogo
    case "React Router":
      return ReactRouterLogo
    case "React Testing Library":
      return ReactTestingLogo
    case "Styled Components":
      return StyledLogo
    case "Gatsby":
      return GatsbyLogo
    case "TypeScript":
      return TypeScriptLogo
    case "JavaScript":
      return JavaScriptLogo
    case "Firebase":
      return FirebaseLogo
    case "HTML":
      return HtmlLogo
    case "CSS":
      return CssLogo
    case "CSS Modules":
      return CssModulesLogo
    case "Sass":
      return SassLogo
    case "Material UI":
      return MaterialLogo
    case "D3":
      return D3Logo
    case "WordPress":
      return WordpressLogo
    default:
      return name
  }
}
