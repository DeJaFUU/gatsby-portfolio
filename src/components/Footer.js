import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
  <footer className="footer">
  <div>
    <h4 className="">Made by Frank with Gatsby.</h4>
    <SocialLinks styleClass="footer-links"></SocialLinks>
  </div>
  </footer>
  )
}

export default Footer
