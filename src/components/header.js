import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

const header = () => {
  return (
    <header className="">
      <div className="class">
        <img src={logo} alt="logo" />
      </div>
      <div className="class">
        <button type="button"></button>
      </div>
    </header>
  )
}

export default header
