import { useEffect } from "react"
import { HeaderUI } from "../../../components/HeaderUI"
import { HeaderWrapperUI } from "../../../components/HeaderWrapperUI"
import { StyleProp } from "../../../settings/types/BaseTypes"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { ChatMessages } from "../components/ChatMessages"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getCurrentSeller,
  selectSellersValues,
} from "../../../modules/sellers/SellersSlice"
import { RowContainerStart } from "../../../template/containers/RowContainer"
import { BackSVG } from "../../../template/svg/BackSVG"
import { ChatHeader } from "../components/ChatHeader"
import { MainContainer } from "../../../template/containers/MainContainer"

export const MessagesPage = () => {
  const { currentSeller } = useAppSelector(selectSellersValues)

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <RowContainerStart $pl={15} $pb={10}>
            <MainContainer style={styles.btn} $mt={5} $mr={20}>
              <BackSVG />
            </MainContainer>
            {currentSeller?.sellerData ? (
              <ChatHeader
                key={currentSeller.sellerData._id}
                name={currentSeller.sellerData.legal_name}
                _id={currentSeller.sellerData._id}
                city={currentSeller.sellerData.city}
                phone={currentSeller.sellerData.phone_number}
              />
            ) : null}
          </RowContainerStart>
        </HeaderWrapperUI>
      </HeaderUI>

      <ChatMessages />
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
  btn: {
    cursor: "pointer",
  },
}
