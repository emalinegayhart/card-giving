import React from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import './Title.css'
function Title() {
    return (
      <div>
        <div className="Title-Title">
          <Link Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>CardStamp</h1>
          </Link>
        </div>
        {/* <div className="nav-container">
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Cards</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
        </div> */}
      </div>
    )
  }
  
  export default Title