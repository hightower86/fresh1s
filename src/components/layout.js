import React from "react"
//import { Helmet } from "react-helmet"

import Header from "../components/header"
import Helmet from "react-helmet"

// Inside your component

const layout = props => (
  <div>
    <Helmet
      bodyAttributes={{
        class: "antialiased bg-gray-200",
      }}
    />
    <Header />
    <div>{props.children}</div>
  </div>
)

export default layout
