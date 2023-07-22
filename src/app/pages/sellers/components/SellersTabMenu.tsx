import React, { useState } from "react"
import { RowContainer } from "../../../template/containers/RowContainer"
import { mockSellersTabMenu } from "../mock/MockSellersPage"
import { SellersTab } from "../ui/SellersTab"
import { CenterContainerFlex } from "../../../template/containers/CenterContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SellersTabMenuType } from "../types/SellersUITypes"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { NewPendingUI } from "../../../components/NewPendingUI"
import { useAppSelector } from "../../../settings/redux/hooks"
import { selectSellersValues } from "../../../modules/sellers/SellersSlice"

type SellersTabMenuProps = {
  activeTab: SellersTabMenuType
  onChangeTab: (key: SellersTabMenuType) => void
}

export const SellersTabMenu = (props: SellersTabMenuProps) => {
  const { claimsListPending } = useAppSelector(selectSellersValues)

  return (
    <RowContainer>
      {Object.entries(mockSellersTabMenu).map(([key, value]) => {
        return (
          <SellersTab
            onClick={() => props.onChangeTab(key as SellersTabMenuType)}
            key={key}
            color={props.activeTab === key ? ColorsUI.text2 : undefined}
          >
            <CenterContainerFlex>
              <TextUI isNoSelect ag={Ag["500_20"]} text={value} />
            </CenterContainerFlex>

            {key === SellersTabMenuType.pending && claimsListPending.length ? (
              <NewPendingUI />
            ) : null}
          </SellersTab>
        )
      })}
    </RowContainer>
  )
}
