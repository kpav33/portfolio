import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  allProjects,
  projectsGrid,
  projectCard,
  projectLinks,
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
  console.log(nodes)

  return (
    <section className={allProjects}>
      <h2>All Projects</h2>
      <p>About all projects text</p>
      <div>Technology filter</div>
      <div className={projectsGrid}>
        {nodes.map(project => (
          <div className={projectCard} key={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <GatsbyImage
              image={getImage(project.frontmatter.image)}
              alt="Banner"
              style={{ width: "300px", height: "250px" }}
            />
            <p>{project.frontmatter.description}</p>
            <div className={projectLinks}>
              <a href={project.frontmatter.liveURL}>Project live</a>
              <a href={project.frontmatter.sourceCodeURL}>Source code</a>
            </div>
            <div>
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
