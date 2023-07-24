import styled from "styled-components"
import { ColorsUI } from "../styles/ColorUI"
import { ContainerProps } from "../../settings/types/UITypes"

type TColor = "tiffany" | "red" | "green" | "border" | "transparent"

interface IButtonUI extends ContainerProps {
  $backColor?: TColor
  $disabledColor?: string
  $mr?: number
}

export const ButtonUI = styled.button<IButtonUI>`
  width: 100%;
  padding: 15px 0;

  background-color: ${({ $backColor }) => getBackColor($backColor)};
  border: 1px solid ${({ $backColor }) => getBorderColor($backColor)};

  border-radius: 8px;

  cursor: pointer;

  margin-bottom: ${({ $mb }) => $mb || 0}px;
  margin-right: ${({ $mr }) => $mr || 0}px;

  transition: 1s;

  &:hover {
    transition: 0.3ms;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    transition: 1s;
    opacity: 1;
    background-color: ${({ $disabledColor }) =>
      $disabledColor || ColorsUI.pink2};
    color: ${ColorsUI.text1};
  }
`

export const getBackColor = (color?: TColor) => {
  switch (color) {
    case "green":
      return ColorsUI.green
    case "red":
      return ColorsUI.red
    case "transparent":
    case "border":
      return ColorsUI.transparent
    default:
      return ColorsUI.tifany2
  }
}

const getBorderColor = (color?: TColor) => {
  if (color === "border") {
    return ColorsUI.text1
  }

  return ColorsUI.transparent
}

export const getButtonTextColor = (color?: TColor) => {
  if (color === "border") {
    return ColorsUI.text1
  }

  return ColorsUI.white
}
