import { useEffect, useState } from "react"
import {
  getSellers,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { FullLoader } from "../../template/ui/FullLoader"
import { HeaderUI } from "../../components/HeaderUI"
import { SellersHeaderWrapper } from "./ui/SellersHeaderWrapper"
import { SellersTabMenu } from "./components/SellersTabMenu"
import { SellersTabMenuType } from "./types/SellersUITypes"
import { Wrapper } from "../../template/containers/Wrapper"
import { SellersListContent } from "./components/SellersListContent"
import { Seller } from "../../modules/sellers/models/Seller"

export const SellersPage = () => {
  const {
    isSellerLoad,
    sellerList,
    sellerListApprove,
    sellerListDeny,
    sellerListPending,
  } = useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const [activeTab, setActiveTab] = useState(SellersTabMenuType.all)

  const [list, setList] = useState<Seller[]>([])

  useEffect(() => {
    if (isSellerLoad !== "load") {
      dispatch(getSellers())
    }
  }, [])

  useEffect(() => {
    switch (activeTab) {
      case SellersTabMenuType.all:
        setList(sellerList?.sellerToApprove || [])
        break
      case SellersTabMenuType.pending:
        setList(sellerListPending)
        break
      case SellersTabMenuType.approve:
        setList(sellerListApprove)
        break
      case SellersTabMenuType.deny:
        setList(sellerListDeny)
        break
    }
  }, [activeTab, sellerList])

  const handleChangeTab = (key: SellersTabMenuType) => {
    setActiveTab(key)
  }

  if (isSellerLoad === "load" && sellerList === null) {
    return <FullLoader />
  }

  return (
    <ColumnContainerFlex>
      <HeaderUI>
        <SellersHeaderWrapper>
          <SellersTabMenu activeTab={activeTab} onChangeTab={handleChangeTab} />
        </SellersHeaderWrapper>
      </HeaderUI>
      <Wrapper $maxWidth={1200}>
        <SellersListContent sellerList={list} />
      </Wrapper>
    </ColumnContainerFlex>
  )
}
