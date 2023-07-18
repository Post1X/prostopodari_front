import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "../template/error/ErrorPage"
import { RedirectApp } from "./RedirectApp"
import { SellersPage } from "../pages/sellers/SellersPage"
import { AuthPage } from "../pages/auth/AuthPage"
import { PathApp } from "./path/PathApp"

export const RouterApp = createBrowserRouter([
  {
    path: PathApp.login.path,
    element: <AuthPage />,
  },
  {
    path: PathApp.home.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: PathApp.stores.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: PathApp.promocodes.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: PathApp.settings.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
  },
])
