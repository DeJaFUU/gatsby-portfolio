import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
  <main className="error-page">
    <div className="error-container">
      <h1>It seems this page does not exist!</h1>
      <Link to='/' className="btn">
        Take me back!
      </Link>
    </div>
  </main>
  </Layout>
  )
}

export default Error
