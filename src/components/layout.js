import React from "react"

import Header from "../components/header"

const layout = props => (
  <>
    <Header />
    <div>{props.children}</div>
  </>
)

export default layout
