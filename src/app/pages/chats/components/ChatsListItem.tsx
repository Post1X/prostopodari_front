import { Chats } from "../../../modules/messages/models/Chats"
import { ListItemUI } from "../../../components/ListItemUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { RowContainer } from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { LineTextVertical } from "../../finances/ui/LineTextVertical"
import { MaskHelper } from "../../../helpers/MaskHelper"
import { ChatNewMessCount } from "../ui/ChatNewMessCount"
import { ColorsUI } from "../../../template/styles/ColorUI"

type ChatsListItemProps = {
  chat: Chats
}

export const ChatsListItem = (props: ChatsListItemProps) => {
  return (
    <ListItemUI $isCursor>
      <MainContainer>
        <RowContainer $mb={10}>
          <TextUI ag={Ag["600_16"]} text={props.chat.name} />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`ID: ${props.chat.id}`} />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`г.${props.chat.city}`} />
          <LineTextVertical />
          <TextUI
            ag={Ag["600_16"]}
            text={MaskHelper.formatPhoneNumber(props.chat.phone_number)}
          />
        </RowContainer>

        <TextUI ag={Ag["400_16"]} text={props.chat.lastMessage} />
      </MainContainer>

      {props.chat.newMessCount ? (
        <ChatNewMessCount>
          <TextUI
            color={ColorsUI.white}
            ag={Ag["400_16"]}
            text={props.chat.newMessCount.toString()}
          />
        </ChatNewMessCount>
      ) : null}
    </ListItemUI>
  )
}
