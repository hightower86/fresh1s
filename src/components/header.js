import React from "react"
import { Link } from "gatsby"

const header = () => {
  return (
    <nav className="lg:px-16 px-3 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">LOGO</Link>
        <label for="menu-toggle" className="point-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
      </div>
    </nav>
  )
}

export default header
