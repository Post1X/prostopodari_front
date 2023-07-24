import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { FinanceHeaderContent } from "./components/FinanceHeaderContent"

export const FinancesPage = () => {
  return (
    <ColumnContainerFlex>
      <HeaderUI $isNoHeight>
        <HeaderWrapperUI $maxWidth={1600}>
          <FinanceHeaderContent />
        </HeaderWrapperUI>
      </HeaderUI>
    </ColumnContainerFlex>
  )
}
