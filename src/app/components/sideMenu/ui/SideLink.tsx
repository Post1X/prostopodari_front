import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"

type TSideLink = {
  color: string
}

export const SideLink = styled(MainContainer)<TSideLink>`
  transition: 0.3s;
  cursor: pointer;

  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${ColorsUI.pink2};
  }

  &:active {
    opacity: 0.5;
  }
`
