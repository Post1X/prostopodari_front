import styled from "styled-components"
import { ColorsUI } from "../styles/ColorUI"

export enum Ag {
  "700_16" = "700_16",
  "600_16" = "600_16",
  "600_14" = "600_14",
  "600_13" = "600_13",
  "500_20" = "500_20",
  "500_18" = "500_18",
  "500_14" = "500_14",
  "400_16" = "400_16",
  "400_12" = "400_12",
}

type TTextUI = {
  ag: Ag
  text: string
  color?: string
  isNoSelect?: boolean
}

type TStyledP = {
  weight: string
  size: string
}

export const TextUI = (props: TTextUI) => {
  const weight = props.ag.substring(0, 3)
  const size = props.ag.substring(4)

  return (
    <P
      style={props.isNoSelect ? { userSelect: "none" } : undefined}
      size={size}
      weight={weight}
      color={props.color}
    >
      {props.text}
    </P>
  )
}

const P = styled.p<TStyledP>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => parseInt(size) * 1.22}px;
  color: ${({ color }) => color || ColorsUI.text1};
`
