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
        <div className="contact">
          <div className="contactText">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus magnam, ex vero voluptas corrupti corporis esse
              molestiae tenetur repellat eos, aliquam rem incidunt odio quis in
              quas inventore pariatur possimus!
            </p>
            <div>Social media icons</div>
          </div>
          <form className="contactForm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus magnam, ex vero voluptas corrupti corporis esse
            molestiae tenetur repellat eos, aliquam rem incidunt odio quis in
            quas inventore pariatur possimus!
          </form>
        </div>
        <p>Built by John Doe</p>
      </footer>
    </div>
  )
}
