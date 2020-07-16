import React from "react"
import {
  FaGithub,
  FaFreeCodeCamp,
  FaCodepen,
  FaReact
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/dejafuu",
  },
  {
    id: 2,
    icon: <FaFreeCodeCamp className="social-icon"></FaFreeCodeCamp>,
    url: "https://www.freecodecamp.org/dejafuu",
  },
  {
    id: 3,
    icon: <FaCodepen className="social-icon"></FaCodepen>,
    url: "https://codepen.com/dejafuu",
  },
  {
    id: 4,
    icon: <FaReact className="social-icon"></FaReact>,
    url: "https://www.udemy.com/user/frank-woord/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
