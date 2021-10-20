import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  featured,
  featuredProject,
  name,
  description,
  additional,
  imageStyle,
} from "../styles/featured.module.css"

export default function FeaturedProjects() {
  const data = useStaticQuery(graphql`
    query FeaturedProjects {
      allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
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
            featured
            featuredTitle
            featuredDescription
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

  return (
    <section className={featured} id="featured">
      <h2>Featured Projects</h2>
      {/* Try/catch ? */}
      {nodes.map(project => (
        <div className={featuredProject} key={project.id}>
          <h3 className={name}>{project.frontmatter.title}</h3>
          <p className={description}>{project.frontmatter.featuredTitle}</p>
          <p className={additional}>
            {project.frontmatter.featuredDescription}
          </p>
          <div className={imageStyle}>
            <a href={project.frontmatter.liveURL}>
              <GatsbyImage
                image={getImage(project.frontmatter.image)}
                alt={project.frontmatter.title}
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </div>
          <a href={`${project.frontmatter.sourceCodeURL}#readme`}>Read more</a>
        </div>
      ))}
    </section>
  )
}
