import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Projects</h2>
        <h3>Project &amp; Websites I have created</h3>
      </div>
    </Layout>
  )
}
