import React, { useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Layout({ children }) {
  const [formState, setFormState] = useState({})
  const [messageSent, setMessageSent] = useState(false)

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  console.log(formState)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => setMessageSent(true))
      .catch(error => alert(error))
  }

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
          <form
            className="contactForm"
            name="contact"
            method="post"
            //action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="johndoe@example.com"
                />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea
                  name="message"
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
            {messageSent && <p>Message sent successfully!</p>}
          </form>
        </div>
        <p>Built by John Doe</p>
      </footer>
    </div>
  )
}
