import styled from "styled-components"
import { ColorsUI } from "../../../template/styles/ColorUI"

type TSellersTab = {
  color?: string
}

export const SellersTab = styled.div<TSellersTab>`
  width: 170px;
  padding-bottom: 8px;
  margin-bottom: -1px;
  cursor: pointer;
  border-bottom: 1px solid ${({ color }) => color || ColorsUI.transparent};
  transition: 0.2s;
  position: relative;

  &:hover {
    border-bottom: 1px solid ${ColorsUI.text2};
  }

  &:active {
    opacity: 0.5;
    border-bottom: 1px solid ${ColorsUI.transparent};
  }
`
