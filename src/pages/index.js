import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, image } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>UX designer &amp; web developer based in Machester.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img className={image} src="/banner.png" alt="site banner" />
      </section>
    </Layout>
  )
}
