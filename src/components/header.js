import React, { useState } from "react"
import AccountDropdown from "./AccountDropdown"
import { Link } from "gatsby"
import logo from "../img/logo.png"

// const onButtonClick = () => {
//   console.log("click")
// }

const Header = () => {
  const [menuActive, setMenuActive] = useState(true)
  return (
    <>
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between py-3 px-4 sm:p-0">
          <div className="">
            <img className=" h-6" src={logo} alt="logo" />
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={() => {
                setMenuActive(!menuActive)
                console.log(menuActive)
              }}
            >
              <svg className="h-8 w-8 py-1 fill-current" viewBox="0 0 24 24">
                {menuActive && (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!menuActive && (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            (menuActive ? "block " : "hidden ") +
            "sm:flex  px-2 pt-2 pb-4 text-white sm:p-0"
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
            className="mt-1 px-2 py-1 block font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            About
          </Link>
          <Link
            to="/"
            className="mt-1 px-2 py-1 block font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Contacts
          </Link>
          <AccountDropdown isActive={menuActive} />
          <div className=" sm:hidden mt-3 pt-3 border-t border-gray-600">
            <div className="z-10 relative block ml-2 mt-2 sm:mt-0 sm:ml-6 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white hover:border-white">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1574272573410-46a78e8f77e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80"
                alt=""
              />
            </div>
            <div className="">
              <Link to="/" className="block m-2 text-gray-300 hover:text-white">
                Account settings
              </Link>
              <Link to="/" className="block m-2 text-gray-300 hover:text-white">
                Support
              </Link>
              <Link to="/" className="block m-2 text-gray-300 hover:text-white">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
