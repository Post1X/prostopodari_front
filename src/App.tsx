import { RouterProvider } from "react-router-dom"
import { RouterApp } from "./app/routes/RouterApp"
import { useAppDispatch } from "./app/settings/redux/hooks"
import { useEffect, useState } from "react"
import { initAuth } from "./app/modules/auth/AuthSlice"
import { CenterContainerFlex } from "./app/template/containers/CenterContainer"
import { LoaderUI } from "./app/template/ui/LoaderUI"

export const App = () => {
  const dispatch = useAppDispatch()

  const [load, setLoad] = useState(true)

  useEffect(() => {
    dispatch(initAuth())

    setTimeout(() => {
      setLoad(false)
    }, 0)
  }, [])

  if (load) {
    return (
      <CenterContainerFlex>
        <LoaderUI size={30} />
      </CenterContainerFlex>
    )
  }

  return (
    <>
      <RouterProvider router={RouterApp} />
    </>
  )
}
