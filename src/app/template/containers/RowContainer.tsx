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

export const RowContainerJustEnd = styled(RowContainer)`
  justify-content: end;
`

export const RowContainerBeetwen = styled(RowContainer)`
  justify-content: space-between;
  align-items: center;
`

export const RowContainerBeetwenEnd = styled(RowContainerBeetwen)`
  align-items: flex-end;
`
export const RowContainerBeetwenEndFlex = styled(RowContainerBeetwenEnd)`
  flex: 1;
`

export const RowContainerStart = styled(RowContainer)`
  align-items: start;
`
