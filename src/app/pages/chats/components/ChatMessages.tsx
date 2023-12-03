import { useEffect, useRef, useState } from "react"
import { MainContainer } from "../../../template/containers/MainContainer"
import { RowContainer } from "../../../template/containers/RowContainer"
import { Wrapper } from "../../../template/containers/Wrapper"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { MessageInputContainerUI, MessageInputUI } from "../ui/MessageInputUI"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getMessages,
  selectMessagesValues,
} from "../../../modules/messages/MessagesSlice"
import { useParams } from "react-router-dom"
import { MessageHelper } from "../../../helpers/MessageHelper"
import { FormattedMessagesModel } from "../types/ChatUITypes"
import { DateHelper } from "../../../helpers/DateHelper"
import { ScrollContent } from "../../../components/ScrollContent"
import { ChatMessageContainer } from "./ChatMessageContainer"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"

export const ChatMessages = () => {
  const { messagesList } = useAppSelector(selectMessagesValues)
  const dispatch = useAppDispatch()

  const load = useRef(true)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const [list, setList] = useState<FormattedMessagesModel[]>([])

  const params = useParams()

  useEffect(() => {
    if (load.current && params.chatId) {
      dispatch(getMessages(params.chatId))
    }

    load.current = false
  }, [])

  useEffect(() => {
    setList(MessageHelper.getFormattedMessages(messagesList))

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, 500)
  }, [messagesList])

  return (
    <Wrapper $mb={30} $ml={15} $mt={30} $maxWidth={600}>
      <ColumnContainerFlex $isRelative>
        <ScrollContent ref={scrollRef}>
          {list.map((groupMessages, idx) => (
            <MainContainer
              $mb={list.length - 1 === idx ? 10 : 60}
              key={groupMessages.date}
            >
              <TextUI
                ag={Ag["400_12"]}
                align={"center"}
                mb={20}
                text={DateHelper.getFormatDateChat(groupMessages.date)}
              />
              {groupMessages.messages.map((message) => (
                <ChatMessageContainer key={message._id} message={message} />
              ))}
            </MainContainer>
          ))}
        </ScrollContent>
      </ColumnContainerFlex>
      <RowContainer>
        <MessageInputContainerUI>
          <MessageInputUI placeholder={"Сообщение"} />
        </MessageInputContainerUI>
        <MainContainer $width={130}>
          <ButtonUI $isInput $pv={10}>
            <TextUI
              color={ColorsUI.white}
              ag={Ag["600_16"]}
              text={"Отправить"}
            />
          </ButtonUI>
        </MainContainer>
      </RowContainer>
    </Wrapper>
  )
}
