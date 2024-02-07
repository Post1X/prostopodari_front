import { useEffect, useRef, useState } from "react"
import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { StyleProp } from "../../settings/types/BaseTypes"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { ChatTabMenuTypes } from "./types/ChatUITypes"
import { ChatsTabMenu } from "./components/ChatsTabMenu"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import {
  getChats,
  selectMessagesValues,
} from "../../modules/messages/MessagesSlice"
import { Chats } from "../../modules/messages/models/Chats"
import { Wrapper } from "../../template/containers/Wrapper"
import { FullLoader } from "../../template/ui/FullLoader"
import { EmptyList } from "../../components/EmptyList"
import { ChatsListItem } from "./components/ChatsListItem"
import { ScrollContent } from "../../components/ScrollContent"
import { DoubleSection } from "../../components/doubleSection/DoubleSection"
import { ChatsCreateNotifContent } from "./components/ChatsCreateNotifContent"
import { ChatNotifContent } from "./components/ChatNotifContent"
import io from "socket.io-client"
import { getCurrentSeller } from "../../modules/sellers/SellersSlice"

export const ChatsPage = () => {
  const { isChatsLoad, chatList, chatListPending } =
    useAppSelector(selectMessagesValues)

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getCurrentSeller("65b26c023a11b3af0a87bdda"))
  // }, [])
  // const [message, setMessage] = useState("")
  // const [messages, setMessages] = useState([])
  // const [socket, setSocket] = useState(null)

  // useEffect(() => {
  //   // connect to WebSocket server
  //   const newSocket = io("http://194.58.121.218:3001")
  //   setSocket(newSocket)

  //   // set up event listeners for incoming messages
  //   newSocket.on("connect", () => console.log("Connected to WebSocket"))
  //   newSocket.on("disconnect", () => console.log("Disconnected from WebSocket"))
  //   newSocket.on("message", (data) => {
  //     setMessages((msgs) => [...msgs, data])
  //   })

  //   // clean up on unmount
  //   return () => {
  //     newSocket.disconnect()
  //   }
  // }, [])

  const [activeTab, setActiveTab] = useState(ChatTabMenuTypes.all)

  const load = useRef(true)

  const [list, setList] = useState<Chats[]>([])

  useEffect(() => {
    if (load.current) {
      dispatch(getChats())
    }

    load.current = false
  }, [])

  useEffect(() => {
    switch (activeTab) {
      case ChatTabMenuTypes.noRead:
        setList(chatListPending)
        break
      case ChatTabMenuTypes.all:
        setList(chatList)
        break
    }
  }, [activeTab, chatList])

  const handleChangeTab = (key: ChatTabMenuTypes) => {
    setActiveTab(key)
  }

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <ChatsTabMenu activeTab={activeTab} onChangeTab={handleChangeTab} />
        </HeaderWrapperUI>
      </HeaderUI>
      {activeTab !== ChatTabMenuTypes.notification ? (
        <>
          {isChatsLoad === "load" && !chatList.length ? <FullLoader /> : null}

          <Wrapper $maxWidth={1200}>
            {isChatsLoad === "completed" && !chatList.length ? (
              <EmptyList listName={"сообщений"} />
            ) : null}
            <ScrollContent>
              {list.map((chat) => (
                <ChatsListItem key={chat.chatID} chat={chat} />
              ))}
            </ScrollContent>
          </Wrapper>
        </>
      ) : (
        <DoubleSection
          firstContent={<ChatsCreateNotifContent />}
          secondContent={<ChatNotifContent />}
          isScrollSecond
        />
      )}
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
}
