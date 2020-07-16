import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <Layout>
    <SEO title="Projects" description="When magic crumbles into dust"/>
    <section className="projects-page">
      <Projects projects={projects} title="Projects gallore" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
