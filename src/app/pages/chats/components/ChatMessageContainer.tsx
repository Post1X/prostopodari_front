import React from "react"
import { Message } from "../../../modules/messages/models/Message"
import { MessageUI } from "../ui/MessageUI"
import { MessageContainerUI } from "../ui/MessageContainerUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { MessageTimeUI } from "../ui/MessageTimeUI"

type ChatMessageContainerProps = {
  message: Message
}

export const ChatMessageContainer = (props: ChatMessageContainerProps) => {
  const { role, text, time } = props.message

  const isAuthor = role === "admin"

  return (
    <MessageContainerUI $mr={isAuthor ? 10 : 0} $isAuthor={isAuthor} $mb={15}>
      <MessageUI $isRelative $isAuthor={isAuthor}>
        <TextUI ag={Ag["400_16"]} text={text} />

        <MessageTimeUI $isAuthor={isAuthor}>
          <TextUI ag={Ag["400_10"]} text={time} />
        </MessageTimeUI>
      </MessageUI>
    </MessageContainerUI>
  )
}
