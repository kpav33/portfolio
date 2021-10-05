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
} from "../styles/all-projects.module.css"

import ReactLogo from "../images/logos/react-logo.svg"
import StyledLogo from "../images/logos/styled-components-logo.svg"
import SassLogo from "../images/logos/sass-logo.svg"
import TypeScriptLogo from "../images/logos/typescript-logo.svg"
import ReactTestingLogo from "../images/logos/react-testing-library-logo.png"

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
  // console.log(nodes)

  const [filter, setFilter] = useState("All")
  // console.log(filter)

  return (
    <section className={allProjects} id="allProjects">
      <h2>All Projects</h2>
      <p>
        Below are listed all of the projects that I have completed so far. Click
        on a technology button to see only the projects where that tool was
        used.
      </p>
      <div className={technologyFilter}>
        <button onClick={() => setFilter("React")}>
          <img width="35px" height="35px" src={ReactLogo} alt={"Test"} />
          <span>React</span>
        </button>
        <button onClick={() => setFilter("Styled Components")}>
          <img width="35px" height="35px" src={StyledLogo} alt={"Test"} />
          <span>Styled Components</span>
        </button>
        <button onClick={() => setFilter("TypeScript")}>
          <img width="35px" height="35px" src={TypeScriptLogo} alt={"Test"} />
          <span>TypeScript</span>
        </button>
        <button onClick={() => setFilter("React Testing Library")}>
          <img width="35px" height="35px" src={ReactTestingLogo} alt={"Test"} />
          <span>React Testing Library</span>
        </button>
        <button onClick={() => setFilter("Sass")}>
          <img width="35px" height="35px" src={SassLogo} alt={"Test"} />
          <span>Sass</span>
        </button>
        <button onClick={() => setFilter("All")}>All projects</button>
      </div>
      {/* Catche errors in case something breaks!!! */}
      <div className={projectsGrid}>
        {nodes
          .filter(project => {
            if (filter === "All") {
              return project
            } else if (project.frontmatter.technologies.includes(filter)) {
              return project
            }
          })
          .map(project => (
            <div className={projectCard} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <GatsbyImage
                image={getImage(project.frontmatter.image)}
                alt="Banner"
                style={{ width: "300px", height: "250px" }}
              />
              <p>
                {project.frontmatter.description}
                {project.frontmatter.workInProgress && " Work in progress..."}
              </p>
              <div className={projectLinks}>
                <a href={project.frontmatter.liveURL}>Project live</a>
                <a href={project.frontmatter.sourceCodeURL}>Source code</a>
              </div>
              <div className={technologyCards}>
                {project.frontmatter.technologies.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        {/* <div className={projectCard}>
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
        </div> */}
      </div>
    </section>
  )
}
