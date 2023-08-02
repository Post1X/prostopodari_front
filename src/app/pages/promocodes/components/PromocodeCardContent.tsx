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
  text: string
  promocodeName: string
}

export const PromocodeCardContent = (props: PromocodeCardContentProps) => {
  return (
    <>
      <RowContainerBeetwen $mb={10}>
        <TextUI ag={Ag["400_16"]} text={props.text} />
        <ButtonUI $isCustom $backColor={"transparent"}>
          <MainContainer $isPointer $mr={-12}>
            <CloseSVG />
          </MainContainer>
        </ButtonUI>
      </RowContainerBeetwen>

      <TextUI ag={Ag["600_16"]} text={`Промокод: ${props.promocodeName}`} />
    </>
  )
}
