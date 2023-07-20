import styled from "styled-components"
import { MainContainer } from "./MainContainer"

type MaxWidthType = 1920 | 1200

type TWrapper = {
  $maxWidth?: MaxWidthType
}

export const Wrapper = styled(MainContainer)<TWrapper>`
  flex: 1;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || 1200}px;
`
