import React, { useState } from "react"
import { InputUnderline } from "../../../components/InputUnderline"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { CommentUI } from "../../../components/CommentUI"

export const ChatsCreateNotifContent = () => {
  const [notifTitle, setNotifTitle] = useState("")
  const [notifDesc, setNotifDesc] = useState("")
  return (
    <>
      <TextUI mb={15} ag={Ag["500_14"]} text={"Заголовок"} />
      <InputUnderline
        $mb={40}
        value={notifTitle}
        $pl={0}
        placeholder={"Напишите заголовок уведомления"}
        onChange={(e) => setNotifTitle(e.target.value)}
      />

      <TextUI mb={5} ag={Ag["500_14"]} text={"Текст уведомления"} />
      <CommentUI
        $mb={40}
        value={notifDesc}
        onChange={(e) => setNotifDesc(e.target.value)}
        placeholder="Напишите текст уведомления"
      />

      <ButtonUI $mb={10}>
        <TextUI
          color={ColorsUI.white}
          ag={Ag["600_16"]}
          text={"Отправить магазинам"}
        />
      </ButtonUI>
      <ButtonUI $backColor={"pink"}>
        <TextUI
          color={ColorsUI.white}
          ag={Ag["600_16"]}
          text={"Отправить покупателям"}
        />
      </ButtonUI>
    </>
  )
}
