import React from "react"
import { Link } from "gatsby"
import { Navbar } from "react-materialize"

const header = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Sass</Link>
            </li>
            <li>
              <Link to="/">Components</Link>
            </li>
            <li>
              <Link to="/">Javascript</Link>
            </li>
            <li>
              <Link to="/">Mobile</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="/" id="mobile-demo">
        <li>
          <Link to="/">Sass</Link>
        </li>
        <li>
          <Link to="/">Components</Link>
        </li>
        <li>
          <Link to="/">Javascript</Link>
        </li>
        <li>
          <Link to="/">Mobile</Link>
        </li>
      </ul>
    </>
  )
}

export default header
