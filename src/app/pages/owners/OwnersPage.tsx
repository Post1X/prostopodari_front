import { useEffect, useRef, useState } from "react"
import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { SearchContainer } from "../../components/SearchContainer"
import { SelectCity } from "../../components/searchCity/components/SelectCity"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { MainContainer } from "../../template/containers/MainContainer"
import { RowContainer } from "../../template/containers/RowContainer"
import { Wrapper } from "../../template/containers/Wrapper"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import {
  getSellers,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { FullLoader } from "../../template/ui/FullLoader"
import { OwnerListItem } from "./components/OwnerListItem"
import { Seller } from "../../modules/sellers/models/Seller"

export const OwnersPage = () => {
  const { sellersList, isSellersLoad } = useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const load = useRef(true)

  const [list, setList] = useState<Seller[]>([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!load.current) return

    dispatch(getSellers())

    load.current = false
  }, [])

  useEffect(() => {
    setList(sellersList)
  }, [sellersList])

  const handleChangeSearch = (value: string) => {
    setSearch(value)

    if (!value.length) {
      setList(sellersList)
      return
    }

    setList(
      sellersList.filter((seller) =>
        (seller.name + seller.phone_number + seller.city)
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    )
  }

  if (isSellersLoad === "load") {
    return <FullLoader />
  }

  return (
    <ColumnContainerFlex>
      <HeaderUI>
        <HeaderWrapperUI pv={17} ph={17}>
          <RowContainer>
            <MainContainer mr={35}>
              <SearchContainer
                value={search}
                onChangeText={(value: string) => handleChangeSearch(value)}
              />
            </MainContainer>

            <SelectCity
              currentCity={""}
              cities={[
                "Москва",
                "Казань",
                "Самара",
                "Новосибирск",
                "Екатеринбург",
                "Ростов",
                "Санк-Петербург",
                "Нижний-Новгород",
              ]}
              isDefault={true}
              setIsDefault={(value: boolean) => {}}
            />
          </RowContainer>
        </HeaderWrapperUI>
      </HeaderUI>
      <Wrapper $maxWidth={1200}>
        {list.map((seller) => (
          <OwnerListItem key={seller._id} seller={seller} />
        ))}
      </Wrapper>
    </ColumnContainerFlex>
  )
}
