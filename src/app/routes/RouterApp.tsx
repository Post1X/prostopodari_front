import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "../template/error/ErrorPage"
import { PathApp } from "./path/PathApp"
import { AuthPage } from "../pages/auth/AuthPage"
import { RedirectApp } from "./redirect/RedirectApp"
import { SellersPage } from "../pages/sellers/SellersPage"
import { SellerPage } from "../pages/sellers/seller/SellerPage"
import { OwnersPage } from "../pages/owners/OwnersPage"
import { OwnerPage } from "../pages/owners/owner/OwnerPage"

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
    path: PathApp.owners.path,
    element: <RedirectApp element={<OwnersPage />} />,
    children: [
      {
        path: `${PathApp.owners.path}/:ownerId`,
        element: <OwnerPage />,
      },
    ],
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
