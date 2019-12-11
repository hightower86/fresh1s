import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

// const onButtonClick = () => {
//   console.log("click")
// }

const Header = () => {
  const [menuActive, setMenuActive] = useState(true)
  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between p-3 px-4">
        <div className="">
          <img className=" h-8" src={logo} alt="logo" />
        </div>
        <div>
          <button
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => {
              setMenuActive(!menuActive)
              console.log(menuActive)
            }}
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          (menuActive ? "block " : "hidden ") + "px-2 pt-2 pb-4 text-white"
        }
      >
        <Link
          to="/"
          className="px-2 py-1 block font-semibold rounded hover:bg-gray-800"
        >
          Home
        </Link>
        <Link
          to="/"
          className="mt-1 px-2 py-1 block font-semibold rounded hover:bg-gray-800"
        >
          About
        </Link>
        <Link
          to="/"
          className="mt-1 px-2 py-1 block font-semibold rounded hover:bg-gray-800"
        >
          Contacts
        </Link>
      </div>
    </header>
  )
}

export default Header
