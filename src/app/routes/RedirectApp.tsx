import { ReactNode, useEffect } from "react"
import { selectToken } from "../modules/auth/AuthSlice"
import { useAppSelector } from "../settings/redux/hooks"
import { useNavigate } from "react-router-dom"

type RedirectPage = {
  element: ReactNode
}

export const RedirectApp = ({ element }: RedirectPage) => {
  const token = useAppSelector(selectToken)
  const navigation = useNavigate()

  useEffect(() => {
    if (!token) {
      navigation("/login")
    }
  }, [])

  return <>{element}</>
}
