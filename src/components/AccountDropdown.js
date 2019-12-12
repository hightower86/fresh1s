import React, { useState } from "react"
import { Link } from "gatsby"

const AccountDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="relative">
      <button className="block ml-2 mt-2 sm:mt-0 sm:ml-6 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white hover:border-white">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1574272573410-46a78e8f77e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80"
          alt=""
          onClick={() => setShowDropdown(!showDropdown)}
        />
      </button>
      <div
        className={
          (showDropdown ? "block " : "hidden ") +
          "absolute w-48 sm:right-0 mt-2 bg-gray-500 rounded-lg py-2 shadow-lg"
        }
      >
        <Link to="/" className="block px-4 py-2 hover:bg-gray-400">
          Account settings
        </Link>
        <Link to="/" className="block px-4 py-2 hover:bg-gray-400">
          Support
        </Link>
        <Link to="/" className="block px-4 py-2 hover:bg-gray-400">
          Sign out
        </Link>
      </div>
    </div>
  )
}

export default AccountDropdown
