// This component will serve as an example of how to create an image component, need to have this take in an image name.

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image2 = () => (
  <StaticQuery
    query={graphql`
      query GeneralImageQuery {
        file(relativePath: { regex: "/undraw_about_me/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      # placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 300) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image2
