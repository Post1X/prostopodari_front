import React from "react"
import { TabMenu } from "../../../components/tabMenu/TabMenu"
import { ChatTabMenuTypes } from "../types/ChatUITypes"
import { MockChatTabMenu } from "../mock/MockChatsTabMenu"

type ChatTabMenuProps = {
  activeTab: ChatTabMenuTypes
  onChangeTab: (key: ChatTabMenuTypes) => void
}

export const ChatsTabMenu = (props: ChatTabMenuProps) => {
  return (
    <TabMenu
      tab={MockChatTabMenu}
      onChangeTab={(key) => props.onChangeTab(key as ChatTabMenuTypes)}
      isNewKey={ChatTabMenuTypes.noRead}
      isNewLength={1}
      activeTab={props.activeTab}
    />
  )
}
