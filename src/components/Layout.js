import React from "react"
import "../styles/global.css"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./Seo"
// import { Helmet } from "react-helmet"
// import favicon from "../images/favicon-32x32.png"
// import appleIcon from "../images/apple-touch-icon.png"

// console.log(favicon)

export default function Layout({ children, width }) {
  return (
    <div className="layout">
      <SEO title="Home" />
      {/* React Helmet HTML head setup */}
      {/* <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="Klemen Pavlovič portfolio website" />
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
        <link
          href={appleIcon}
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
        />
        <title>Klemen Pavlovič</title>
      </Helmet> */}
      <Header width={width} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
