import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {details, html, featured} from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={details}>
        <h2>Title</h2>
        <h3>Stack</h3>
        <div className={featured}>ok</div>
        <div className={html} dangerouslySetInnerHTML={} />
      </div>
    </Layout>
  )
}
