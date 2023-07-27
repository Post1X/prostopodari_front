import { NotifCard } from "../../../components/notifCard/NotifCard"
import { ChatNotifCard } from "./ChatNotifCard"

export const ChatNotifContent = () => {
  return (
    <>
      <NotifCard
        containerProps={{
          $mb: 20,
        }}
        headerColor={"tiffany"}
        content={<ChatNotifCard />}
      />
      <NotifCard headerColor={"pink"} content={<ChatNotifCard />} />
    </>
  )
}
