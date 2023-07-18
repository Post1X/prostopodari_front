import styled from "styled-components"
import { ColorsUI } from "./styles/ColorUI"
import { TMargin } from "../settings/types/UITypes"

type TColor = "tiffany" | "red" | "green" | "transparent"

interface IButtonUI extends TMargin {
  backColor?: TColor
}

export const ButtonUI = styled.button<IButtonUI>`
  width: 100%;
  padding: 15px 0;

  color: ${({ backColor }) => getTextColor(backColor)};

  background-color: ${({ backColor }) => getBackColor(backColor)};
  border: 1px solid ${({ backColor }) => getBorderColor(backColor)};
  border-radius: 8px;

  cursor: pointer;

  margin-bottom: ${({ mb }) => mb || 0}px;

  transition: 1s;

  &:hover {
    transition: 0.3ms;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    transition: 1s;
    opacity: 1;
    background-color: ${ColorsUI.pink2};
    color: ${ColorsUI.text1};
  }
`

const getBackColor = (color?: TColor) => {
  switch (color) {
    case "green":
      return ColorsUI.green
    case "red":
      return ColorsUI.red
    case "transparent":
      return color
    default:
      return ColorsUI.tifany2
  }
}

const getBorderColor = (color?: TColor) => {
  if (color === "transparent") {
    return ColorsUI.text1
  }

  return "transparent"
}

const getTextColor = (color?: TColor) => {
  if (color === "transparent") {
    return ColorsUI.text1
  }

  return ColorsUI.white
}
