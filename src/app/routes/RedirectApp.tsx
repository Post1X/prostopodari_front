import { ReactNode, useEffect } from "react"
import { selectToken } from "../modules/auth/AuthSlice"
import { useAppSelector } from "../settings/redux/hooks"
import { useNavigate } from "react-router-dom"
import { RowContainerFlex } from "../template/containers/RowContainer"
import { SideMenu } from "../components/sideMenu/SideMenu"
import { PathApp } from "./path/PathApp"

type RedirectPage = {
  element: ReactNode
}

export const RedirectApp = ({ element }: RedirectPage) => {
  const token = useAppSelector(selectToken)

  const navigation = useNavigate()

  useEffect(() => {
    if (!token) {
      navigation(PathApp.login.path)
    }
  }, [])

  return (
    <RowContainerFlex>
      <SideMenu />
      {element}
    </RowContainerFlex>
  )
}
