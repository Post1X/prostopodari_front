import styled from "styled-components"
import { TMargin } from "../../settings/types/UITypes"

export const RowContainer = styled.div<TMargin>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ mb }) => mb || 0}px;
`
