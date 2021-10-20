import React from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="error">
        <h2>404</h2>
        <p>Sorry, we cant find this page.</p>
        <p>Either something went wrong or this page doesn't exist.</p>
        <hr />
        <a href="/">Home page</a>
      </div>
    </Layout>
  )
}
