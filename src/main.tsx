import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/settings/redux/store"
import { App } from "./App"
import { RouterProvider } from "react-router-dom"
import { RouterApp } from "./app/routes/RouterApp"
import "./app/template/styles/css/reset.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={RouterApp} />
    </Provider>
  </React.StrictMode>,
)
