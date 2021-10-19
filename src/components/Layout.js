import React from "react"
import "../styles/global.css"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon-32x32.png"

export default function Layout({ children, width }) {
  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="John Doe portfolio website" />
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
        <title>John Doe</title>
      </Helmet>
      <Header width={width} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
