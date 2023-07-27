import React from "react"
import { NotifCard } from "../../../components/notifCard/NotifCard"
import { PromocodeCardContent } from "./PromocodeCardContent"

export const PromocodeCards = () => {
  return (
    <>
      <NotifCard
        containerProps={{
          $mb: 20,
        }}
        headerColor={"tiffany"}
        content={<PromocodeCardContent />}
      />
      <NotifCard
        headerColor={"red"}
        isExpired
        content={<PromocodeCardContent isExpired />}
      />
    </>
  )
}
