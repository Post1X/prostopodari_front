import { RowContainer } from "../containers/RowContainer"
import styled from "styled-components"
import { MainContainer } from "../containers/MainContainer"
import { CheckedSVG } from "../svg/CheckedSVG"
import { Ag, TextUI } from "./TextUI"

type CheckboxUIProps = {
  text: string
  checked: boolean
  onChange: () => void
}

export const CheckboxUI = (props: CheckboxUIProps) => {
  return (
    <Label>
      <InputCheckbox
        type={"checkbox"}
        checked={props.checked}
        onChange={props.onChange}
      />
      <RowContainer>
        <MainContainer $mr={15}>
          <CheckedSVG checked={props.checked} />
        </MainContainer>
        <TextUI isNoSelect ag={Ag["400_16"]} text={props.text} />
      </RowContainer>
    </Label>
  )
}

const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Label = styled.label`
  cursor: pointer;
`
