import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { RowContainer } from "../../../template/containers/RowContainer"
import { PathApp } from "../../../routes/path/PathApp"
import { useNavigate } from "react-router-dom"

type OwnerButtonsProps = {
  id: string
  is_baned: boolean
  onBaned: () => void
}

export const OwnerButtons = (props: OwnerButtonsProps) => {
  const navigate = useNavigate()

  const handleGoFinances = () => {
    navigate(`${PathApp.finances.path}/${props.id}`)
  }

  return (
    <>
      <TextUI
        color={props.is_baned ? ColorsUI.red : ColorsUI.tifany1}
        ag={Ag["400_16"]}
        text={props.is_baned ? "Заблокирован" : "Активен"}
      />

      <RowContainer>
        <MainContainer onClick={() => props.onBaned()} $width={200} $mr={10}>
          <ButtonUI $backColor={props.is_baned ? "green" : "red"}>
            <TextUI
              color={ColorsUI.white}
              ag={Ag["600_16"]}
              text={props.is_baned ? "Разблокировать" : "Блокировать"}
            />
          </ButtonUI>
        </MainContainer>

        <MainContainer $width={200} $mr={10}>
          <ButtonUI $backColor={"border"}>
            <TextUI ag={Ag["600_16"]} text="Чат" />
          </ButtonUI>
        </MainContainer>

        <MainContainer $width={200}>
          <ButtonUI $backColor={"border"} onClick={() => handleGoFinances()}>
            <TextUI ag={Ag["600_16"]} text="Финансы" />
          </ButtonUI>
        </MainContainer>
      </RowContainer>
    </>
  )
}
