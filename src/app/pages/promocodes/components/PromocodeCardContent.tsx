import {
  RowContainer,
  RowContainerBeetwen,
} from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { CloseSVG } from "../../../template/svg/CloseSVG"
import { ColorsUI } from "../../../template/styles/ColorUI"

type PromocodeCardContentProps = {
  isExpired?: boolean
}

export const PromocodeCardContent = (props: PromocodeCardContentProps) => {
  return (
    <>
      <RowContainerBeetwen $mb={15}>
        <RowContainer>
          <TextUI mr={10} ag={Ag["400_16"]} text={"12.12.2023"} />
          {props.isExpired ? (
            <TextUI color={ColorsUI.red} ag={Ag["400_16"]} text={"Истек"} />
          ) : null}
        </RowContainer>

        <RowContainer>
          <TextUI
            color={ColorsUI.pink}
            mr={10}
            ag={Ag["400_16"]}
            text={"Скидка 10%"}
          />
          <ButtonUI $isCustom $backColor={"transparent"}>
            <MainContainer $isPointer $mr={-12} $mb={2.5}>
              <CloseSVG />
            </MainContainer>
          </ButtonUI>
        </RowContainer>
      </RowContainerBeetwen>

      <TextUI mb={10} ag={Ag["400_16"]} text={"День космонавтики"} />

      <TextUI ag={Ag["600_16"]} text={"Промокод: BUXAEM"} />
    </>
  )
}
