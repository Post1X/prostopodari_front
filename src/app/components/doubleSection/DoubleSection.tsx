import React, { ReactNode } from "react"
import { DoubleSectionContainer } from "./ui/DoubleSectionUI"
import { ScrollContent } from "../ScrollContent"
import { RowContainerFlex } from "../../template/containers/RowContainer"
import { Wrapper } from "../../template/containers/Wrapper"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { StyleProp } from "../../settings/types/BaseTypes"

type DoubleSectionProps = {
  firstContent: ReactNode
  secondContent: ReactNode
  isNoMT?: boolean
}

export const DoubleSection = (props: DoubleSectionProps) => {
  return (
    <Wrapper $maxWidth={800}>
      <RowContainerFlex>
        <DoubleSectionContainer $ph={25}>
          <ColumnContainerFlex $mt={props.isNoMT ? 0 : 30}>
            <>{props.firstContent}</>
          </ColumnContainerFlex>
        </DoubleSectionContainer>

        <DoubleSectionContainer $ph={25}>
          <ColumnContainerFlex
            $mt={props.isNoMT ? 0 : 30}
            style={styles.containerScroll}
          >
            <ScrollContent>{props.secondContent}</ScrollContent>
          </ColumnContainerFlex>
        </DoubleSectionContainer>
      </RowContainerFlex>
    </Wrapper>
  )
}

const styles: StyleProp = {
  containerScroll: {
    position: "relative",
  },
}
