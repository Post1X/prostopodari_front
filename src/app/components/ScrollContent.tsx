import styled from "styled-components"
import { MainContainer } from "../template/containers/MainContainer"
import { ColorsUI } from "../template/styles/ColorUI"

export const ScrollContent = styled(MainContainer)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${ColorsUI.lightBlue};
  }

  &::-webkit-scrollbar-thumb {
    background: ${ColorsUI.scroll};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`
