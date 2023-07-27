import React from "react"
import {
  RowContainer,
  RowContainerBeetwen,
} from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { CloseSVG } from "../../../template/svg/CloseSVG"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI } from "../../../template/ui/ButtonUI"

export const ChatNotifCard = () => {
  return (
    <>
      <RowContainerBeetwen $mb={12}>
        <TextUI ag={Ag["400_16"]} text={"Покупатели"} />
        <RowContainer>
          <TextUI mr={10} ag={Ag["400_16"]} text={"12.12.2023"} />
          <ButtonUI $isCustom $backColor={"transparent"}>
            <MainContainer $isPointer $mr={-12}>
              <CloseSVG />
            </MainContainer>
          </ButtonUI>
        </RowContainer>
      </RowContainerBeetwen>

      <TextUI mb={10} ag={Ag["600_16"]} text={"С Новым Годом!"} />

      <TextUI
        ag={Ag["400_16"]}
        text={
          "Здравствуйте уважаемый владелец нашей платформы! Поздравляем Вас с Новым годом, спасибо что вы есть с нами!"
        }
      />
    </>
  )
}
