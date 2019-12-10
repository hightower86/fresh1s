import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

const header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900">
      <div className="">
        <img className=" h-8" src={logo} alt="logo" />
      </div>
      <div className="class">
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default header
