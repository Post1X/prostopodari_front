import styled from "styled-components"
import { ContainerProps } from "../../settings/types/UITypes"
import { MainContainer } from "./MainContainer"

export const RowContainer = styled(MainContainer)`
  flex-direction: row;
  align-items: center;
`

export const RowContainerFlex = styled(RowContainer)`
  flex: 1;
  align-items: start;
`

export const RowContainerEnd = styled(RowContainer)`
  align-items: end;
`
export const RowContainerBeetwen = styled(RowContainer)`
  justify-content: space-between;
  align-items: center;
`
