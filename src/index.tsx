import React from "react"
import ReactDOM from "react-dom/client"
import { inject } from "@vercel/analytics"

inject()

import AppNavigator from "./AppNavigator"
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <AppNavigator />
  </React.StrictMode>
)
