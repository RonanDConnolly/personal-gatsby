import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SocialLinks from '../components/socialLinks'

const HOMEPAGE_IMAGE_QUERY = graphql`
  query HomePageImageQuery {
    file(relativePath: { regex: "/undraw_designer_kcp7_cropped/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        twitterHandle
        linkedInHandle
        githubHandle
        email
      }
    }
  }
`

const HomeSection = styled.section`
  margin-top: 30px;
`

/**
 * The Home page.
 */
const IndexPage = ({ location }) => (
  <StaticQuery
    query={HOMEPAGE_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO
          title="Homepage"
          keywords={[`ronan connolly`, `front-end`, `developer`, `designer`]}
        />

        <HomeSection role="region" aria-label="Summary of myself.">
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              maxWidth: '600px',
              marginBottom: '50px',
            }}
            alt={'A designer / developer at work.'}
          />
          <h2>
            Hi, I'm Ronan D. Connolly.
            <br />A Front-End Software Engineer, Web Developer, and Angular Specialist who works in the finance domain.
          </h2>

          <p>
            I love working with people who are passionate about technology and
            how it can be applied in meaningful ways.
          </p>

          <p>
            I take pride in my work, and take every opportunity as a chance to
            learn something new and grow.
          </p>

          <p>
            Get in touch if you're interested in collaborating on a project{' '}
            <span role="img" aria-label="rocket">
              🛠
            </span>
          </p>
        </HomeSection>

        <SocialLinks />
      </Layout>
    )}
  />
)

export default IndexPage
