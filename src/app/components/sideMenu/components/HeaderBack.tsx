import React from "react"
import { HeaderUI } from "../../HeaderUI"
import { SellersHeaderWrapper } from "../../../pages/sellers/ui/SellersHeaderWrapper"
import { MainContainer } from "../../../template/containers/MainContainer"
import { BackSVG } from "../../../template/svg/BackSVG"
import { StyleProp } from "../../../settings/types/BaseTypes"
import { useNavigate } from "react-router-dom"

export const HeaderBack = () => {
  const navigate = useNavigate()

  const handlePop = () => {
    navigate(-1)
  }

  return (
    <HeaderUI>
      <SellersHeaderWrapper>
        <MainContainer
          onClick={() => handlePop()}
          style={styles.btn}
          pv={20}
          ph={20}
        >
          <BackSVG />
        </MainContainer>
      </SellersHeaderWrapper>
    </HeaderUI>
  )
}

const styles: StyleProp = {
  btn: {
    cursor: "pointer",
  },
}
