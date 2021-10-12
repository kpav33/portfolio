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
  // const data = useStaticQuery(graphql`
  //   query FeaturedProjects {
  //     allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
  //       nodes {
  //         frontmatter {
  //           title
  //           description
  //           sourceCodeURL
  //           liveURL
  //           slug
  //           date
  //           workInProgress
  //           featured
  //           technologies
  //           image {
  //             childImageSharp {
  //               gatsbyImageData(
  //                 layout: FULL_WIDTH
  //                 placeholder: BLURRED
  //                 formats: [AUTO, WEBP]
  //               )
  //             }
  //           }
  //         }
  //         id
  //       }
  //     }
  //   }
  // `)

  // console.log(data)
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
  // console.log(nodes)

  return (
    <section className={featured} id="featured">
      <h2>Featured Projects</h2>
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

      {/* <div className={featuredProject}>
        <h3 className={name}>Project name</h3>
        <p className={description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <p className={additional}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <div className={imageStyle}>Project Image</div>
        <button className={button}>Read More</button>
      </div>
      <div className={featuredProject}>
        <h3 className={name}>Project name</h3>
        <p className={description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <p className={additional}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ab
          sit doloremque vero velit quam?
        </p>
        <div className={imageStyle}>Project Image</div>
        <button className={button}>Read More</button>
      </div> */}
    </section>
  )
}
