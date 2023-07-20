import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "../template/error/ErrorPage"
import { PathApp } from "./path/PathApp"
import { AuthPage } from "../pages/auth/AuthPage"
import { RedirectApp } from "./redirect/RedirectApp"
import { SellersPage } from "../pages/sellers/SellersPage"
import { SellerPage } from "../pages/sellers/seller/SellerPage"

export const RouterApp = createBrowserRouter([
  {
    path: PathApp.login.path,
    element: <AuthPage />,
  },
  {
    path: PathApp.home.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/${PathApp.seller.path}/:sellerId`,
        element: <SellerPage />,
      },
    ],
  },
  {
    path: PathApp.stores.path,
    element: <RedirectApp element={<ErrorPage />} />,
  },
  {
    path: PathApp.promocodes.path,
    element: <RedirectApp element={<ErrorPage />} />,
  },
  {
    path: PathApp.settings.path,
    element: <RedirectApp element={<ErrorPage />} />,
  },
])
