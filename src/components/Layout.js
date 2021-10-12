import React from "react"
import "../styles/global.css"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children, width }) {
  return (
    <div className="layout">
      <Header width={width} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
