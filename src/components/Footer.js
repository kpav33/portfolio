import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import GithubLogo from "../images/logos/github-logo.inline.svg"
import FreecodecampLogo from "../images/logos/freecodecamp-logo.inline.svg"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Footer() {
  const [formState, setFormState] = useState({})
  const [messageSent, setMessageSent] = useState(false)

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  // console.log(formState)

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
    <footer>
      <div className="contact" id="contact">
        <div className="contactText">
          <h3>Contact</h3>
          <p>
            If you would like to get in touch with me, please send me a message
            or reach out to me through any of my social media channels.
          </p>
          <div className="socialIcons">
            <a href="https://github.com/kpav33">
              <GithubLogo />
            </a>
            <a href="https://forum.freecodecamp.org/u/kpav/summary">
              <FreecodecampLogo />
            </a>
          </div>
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
      <div className="footerInfo">
        <p>
          <AnchorLink to="/" title="Top of page">
            Built by John Doe
          </AnchorLink>
        </p>
        <p>
          Images from <a href="https://drawkit.com/">DrawKit</a>, SVG icons from{" "}
          <a href="https://www.svgrepo.com/">SVGRepo</a>.
        </p>
      </div>
    </footer>
  )
}
