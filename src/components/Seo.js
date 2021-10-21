import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import favicon from "../images/favicon-32x32.png"
import appleIcon from "../images/apple-touch-icon.png"

export default function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            author
            contact
            copyright
            description
            keywords
            title
            image
          }
        }
      }
    `
  )

  const image = site.siteMetadata.image
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  //   console.log(keywords)
  //   console.log(metaDescription)
  //   console.log(defaultTitle)
  //   console.log(image)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      //   titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      titleTemplate={defaultTitle ? defaultTitle : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      <link
        href="../../apple-touch-icon.png"
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
