import React from "react"
import { Link } from "gatsby"

const header = () => {
  return (
    <header className="lg:px-16 px-3 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">LOGO</Link>
        <label for="menu-toggle" className="cursor-pointer lg:hidden block">
          <div className="w-50 h-20 bg-red-300">
            <div className="w-4 h-px2 bg-gray-900"></div>
            <div className="w-4 h-px2 bg-gray-900 my-3"></div>
            <div className="w-4 h-px2 bg-gray-900"></div>
          </div>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
      </div>
    </header>
  )
}

export default header
