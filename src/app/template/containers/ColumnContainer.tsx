import styled from "styled-components"
import { MainContainer } from "./MainContainer"

export const ColumnContainerBetween = styled(MainContainer)`
  justify-content: space-between;
`

export const ColumnContainerBetweenFlex = styled(ColumnContainerBetween)`
  flex: 1;
`
