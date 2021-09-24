import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projectsStyle } from "../../styles/projects.module.css"

export default function Projects({ data }) {
  // console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  //console.log(projects)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Projects</h2>
        <h3>Project &amp; Websites I have created</h3>
        <div className={projectsStyle}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
