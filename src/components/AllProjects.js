import React from "react"
import {
  allProjects,
  projectsGrid,
  projectCard,
} from "../styles/all-projects.module.css"

export default function AllProjects() {
  return (
    <section className={allProjects}>
      <h2>All Projects</h2>
      <p>About all projects text</p>
      <div>Technology filter</div>
      <div className={projectsGrid}>
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
        </div>
        <div className={projectCard}>
          <h3>Project name</h3>
          <div>Project image</div>
          <p>Project description</p>
          <div>Two buttons for project live and source code link</div>
          <div>Technologies used</div>
        </div>
      </div>
    </section>
  )
}
