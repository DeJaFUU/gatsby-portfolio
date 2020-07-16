import React from "react"
import Links from "../constants/links"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen, toggleSideBar}) => {
  
  return (
  <aside className={`sidebar ${isOpen? "show-sidebar" : ''}`}>
    <button className="close-btn" onClick={toggleSideBar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
    </div>
  </aside>
  )
}

export default Sidebar
