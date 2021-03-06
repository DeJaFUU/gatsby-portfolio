import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {allStrapiProjects:{nodes:projects}} = data

  return (
  <Layout>
    <SEO title="Home" description="This is where the magic happens"/>
    <Hero />
    <Services />
    <Jobs  />
    <Projects projects={projects} title="Featured projects" showLink />
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        title
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
