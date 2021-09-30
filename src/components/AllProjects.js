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
    <section className={allProjects}>
      <h2>All Projects</h2>
      <p>About all projects text</p>
      <div className={technologyFilter}>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("Styled Components")}>
          Styled Components
        </button>
        <button onClick={() => setFilter("TypeScript")}>TypeScript</button>
        <button onClick={() => setFilter("React Testing Library")}>
          React Testing Library
        </button>
        <button onClick={() => setFilter("Sass")}>Sass</button>
        <button onClick={() => setFilter("All")}>All</button>
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
