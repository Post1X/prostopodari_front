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
  getChatId,
  getMessages,
  selectMessagesValues,
  setLocaleSellerId,
} from "../../../modules/messages/MessagesSlice"
import { useParams } from "react-router-dom"
import { MessageHelper } from "../../../helpers/MessageHelper"
import { FormattedMessagesModel } from "../types/ChatUITypes"
import { DateHelper } from "../../../helpers/DateHelper"
import { ScrollContent } from "../../../components/ScrollContent"
import { ChatMessageContainer } from "./ChatMessageContainer"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import io from "socket.io-client"
import { selectSellersValues } from "../../../modules/sellers/SellersSlice"

export const ChatMessages = () => {
  const { currentSeller } = useAppSelector(selectSellersValues)

  const sellerId = currentSeller?.sellerData?._id
  const scrollRef = useRef<HTMLDivElement | null>(null)

  let myRoom = useParams()

  const [list, setList] = useState<FormattedMessagesModel[]>([])

  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])

  const [messageInput, setMessageInput] = useState("")
  useEffect(() => {
    setList(MessageHelper.getFormattedMessages(messages))

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, 500)
  }, [messages])

  useEffect(() => {
    let socketInstance

    if (sellerId && myRoom.chatId) {
      socketInstance = io("http://194.58.121.218:3001/chat/messages", {
        query: {
          roomId: myRoom.chatId,
          seller_id: sellerId,
          token: localStorage.getItem("token"),
        },
      })

      setSocket(socketInstance)
    }

    return () => {
      if (socketInstance) {
        socketInstance.disconnect()
      }
    }
  }, [sellerId, myRoom.chatId])

  const sendMessage = (e) => {
    e.preventDefault()
    if (messageInput) {
      socket.emit("sendMessage", { text: messageInput })
      addMessage(`You: ${messageInput}`)
      setMessageInput("")
    }
  }

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to the server.")
      })

      socket.on("messages", (data) => {
        setMessages(data.messages)
      })

      socket.on("newMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message])
      })

      socket.on("disconnect", () => {
        console.log("Disconnected from the server.")
      })
    }
  }, [socket])

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(e)
    }
  }

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  return (
    <Wrapper $mb={30} $ml={15} $mt={30} $maxWidth={600}>
      <ColumnContainerFlex $isRelative>
        <ScrollContent ref={scrollRef}>
          {list.map((groupMessages, idx) => (
            <MainContainer
              $mb={list.length - 1 === idx ? 10 : 60}
              key={DateHelper.getFormatDateOfBack(groupMessages.date)}
            >
              <TextUI
                ag={Ag["400_12"]}
                align={"center"}
                mb={20}
                text={DateHelper.getFormatLongDate(groupMessages.date)}
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
          <MessageInputUI
            value={messageInput}
            onKeyPress={handleEnterPress}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder={"Сообщение"}
          />
        </MessageInputContainerUI>
        <MainContainer $width={130}>
          <ButtonUI onClick={sendMessage} $isInput $pv={10}>
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
