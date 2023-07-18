import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "../template/error/ErrorPage"
import { RedirectApp } from "./RedirectApp"
import { SellersPage } from "../pages/sellers/SellersPage"
import { AuthPage } from "../pages/auth/AuthPage"

export const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
])
