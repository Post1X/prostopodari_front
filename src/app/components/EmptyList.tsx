import React from "react"
import { SellersListItem } from "./SellerListItem"
import { Ag, TextUI } from "../template/ui/TextUI"

type EmptyListProps = {
  listName: string
}

export const EmptyList = ({ listName }: EmptyListProps) => {
  return (
    <SellersListItem>
      <TextUI ag={Ag["500_20"]} text={`Список ${listName} пуст`} />
    </SellersListItem>
  )
}
