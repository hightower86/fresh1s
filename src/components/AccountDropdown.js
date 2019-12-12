import React from "react"
import { Link } from "gatsby"

const AccountDropdown = () => {
  return (
    <div className="p-4 w-48">
      <button className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1574272573410-46a78e8f77e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80"
          alt=""
        />
      </button>
      <div className="bg-gray-600 rounded-lg p-2">
        <Link to="/" className="block">
          Account settings
        </Link>
        <Link to="/" className="block">
          Support
        </Link>
        <Link to="/" className="block">
          Sign out
        </Link>
      </div>
    </div>
  )
}

export default AccountDropdown
