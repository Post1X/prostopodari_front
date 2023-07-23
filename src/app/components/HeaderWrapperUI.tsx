import styled from "styled-components"
import { Wrapper } from "../template/containers/Wrapper"
import { ColorsUI } from "../template/styles/ColorUI"

export const HeaderWrapperUI = styled(Wrapper)`
  justify-content: flex-end;
  border-bottom: 1px solid ${ColorsUI.lines};
`
