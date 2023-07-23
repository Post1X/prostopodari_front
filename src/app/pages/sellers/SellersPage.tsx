import { useEffect, useState } from "react"
import {
  getClaims,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { FullLoader } from "../../template/ui/FullLoader"
import { HeaderUI } from "../../components/HeaderUI"
import { SellersTabMenu } from "./components/SellersTabMenu"
import { SellersTabMenuType } from "./types/SellersUITypes"
import { Wrapper } from "../../template/containers/Wrapper"
import { SellersListContent } from "./components/SellersListContent"
import { Seller } from "../../modules/sellers/models/Seller"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"

export const SellersPage = () => {
  const { isClaimsLoad, claimsList, claimsListDeny, claimsListPending } =
    useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const [activeTab, setActiveTab] = useState(SellersTabMenuType.pending)

  const [list, setList] = useState<Seller[]>([])

  useEffect(() => {
    if (isClaimsLoad !== "load") {
      dispatch(getClaims())
    }
  }, [])

  useEffect(() => {
    switch (activeTab) {
      case SellersTabMenuType.pending:
        setList(claimsListPending)
        break
      case SellersTabMenuType.denied:
        setList(claimsListDeny)
        break
    }
  }, [activeTab, claimsList])

  const handleChangeTab = (key: SellersTabMenuType) => {
    setActiveTab(key)
  }

  if (isClaimsLoad === "load" && claimsList === null) {
    return <FullLoader />
  }

  return (
    <ColumnContainerFlex>
      <HeaderUI>
        <HeaderWrapperUI>
          <SellersTabMenu activeTab={activeTab} onChangeTab={handleChangeTab} />
        </HeaderWrapperUI>
      </HeaderUI>
      <Wrapper $maxWidth={1200}>
        <SellersListContent claimsList={list} />
      </Wrapper>
    </ColumnContainerFlex>
  )
}
