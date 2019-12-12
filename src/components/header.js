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
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
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
        </div>
      </header>
      <AccountDropdown isActive={menuActive}></AccountDropdown>
    </>
  )
}

export default Header
