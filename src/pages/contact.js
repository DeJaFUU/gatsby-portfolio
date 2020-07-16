import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="How to contact me!"/>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/mnqggowk" method="POST">
            <div className="form-group">
              <input type="text" 
              placeholder="name" 
              className="form-control"
              name="name"/>
              <input type="email" 
              placeholder="email" 
              className="form-control"
              name="email"/>
              <textarea name="message" placeholder="message" rows="5" className="form-control"/>
            </div>
            <button value="Send" type="submit" className="submit-btn btn">Submit!</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
