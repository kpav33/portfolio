import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        {/* Create seperate footer component with a contact form and contact information */}
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
