import { RouterProvider } from "react-router-dom"
import { RouterApp } from "./app/routes/RouterApp"
import { useAppDispatch } from "./app/settings/redux/hooks"
import { useEffect, useState } from "react"
import { initAuth } from "./app/modules/auth/AuthSlice"

export const App = () => {
  const dispatch = useAppDispatch()

  const [load, setLoad] = useState(true)

  useEffect(() => {
    dispatch(initAuth())

    setTimeout(() => {
      setLoad(false)
    }, 500)
  }, [])

  if (load) {
    return <></>
  }

  return (
    <>
      <RouterProvider router={RouterApp} />
    </>
  )
}
