import React from "react"
import {
  RowContainer,
  RowContainerBeetwen,
} from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { CloseSVG } from "../../../template/svg/CloseSVG"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { DateHelper } from "../../../helpers/DateHelper"

export const ChatNotifCard = ({ data }) => {
  let { body, date, role, title } = data

  return (
    <>
      <RowContainerBeetwen $mb={12}>
        <TextUI
          ag={Ag["400_16"]}
          text={role == "buyer" ? "Покупатели" : "Продавцы"}
        />
        <RowContainer>
          <TextUI
            mr={10}
            ag={Ag["400_16"]}
            text={DateHelper.getFormatLongDate(date)}
          />
          <ButtonUI $isCustom $backColor={"transparent"}>
            <MainContainer $isPointer $mr={-12}>
              <CloseSVG />
            </MainContainer>
          </ButtonUI>
        </RowContainer>
      </RowContainerBeetwen>

      <TextUI mb={10} ag={Ag["600_16"]} text={title} />

      <TextUI ag={Ag["400_16"]} text={body} />
    </>
  )
}
