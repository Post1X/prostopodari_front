import { HeaderBack } from "../../../components/sideMenu/components/HeaderBack"
import {
  selleryChangeForm,
  selectSellersValues,
  setCurrentSeller,
  putApproveSeller,
  putDenySeller,
} from "../../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { RowContainer } from "../../../template/containers/RowContainer"
import { FullLoader } from "../../../template/ui/FullLoader"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SellerInfo } from "../components/SellerInfo"
import { SellerButtonsGroup } from "../ui/SellerButtonsGroup"
import { ButtonUI, getButtonTextColor } from "../../../template/ui/ButtonUI"
import { InputUnderline } from "../../../components/InputUnderline"
import { SellerDenyFormKeys } from "../../../modules/sellers/form/SellerDenyForm"
import { useEffect } from "react"
import { Params, useNavigate, useParams } from "react-router-dom"
import { CenterContainerFlex } from "../../../template/containers/CenterContainer"
import { SellerParams } from "../../../routes/params/SellerParams"
import { TSellersDTO } from "../../../modules/sellers/types/SellersTypes"
import { PathApp } from "../../../routes/path/PathApp"

export const SellerPage = () => {
  const { currentSeller, sellerDenyForm, sellerListPending, isSellerLoad } =
    useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const params = useParams<SellerParams>()

  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      dispatch(selleryChangeForm({ key: SellerDenyFormKeys.reason, value: "" }))
    }
  }, [])

  useEffect(() => {
    if (params.sellerId) {
      const seller = sellerListPending.find(
        (seller) => seller._id === params.sellerId,
      )

      dispatch(setCurrentSeller(seller || null))
    }
  }, [sellerListPending])

  const handleChangeForm = (value: string) => {
    dispatch(selleryChangeForm({ key: SellerDenyFormKeys.reason, value }))
  }

  const handleDeny = async () => {
    let denyDTO: TSellersDTO = {
      seller_user_id: currentSeller?._id!,
    }

    if (sellerDenyForm.reason.length) {
      denyDTO = { ...denyDTO, message_from_admin: sellerDenyForm.reason }
    }

    await dispatch(putDenySeller(denyDTO))

    navigate(PathApp.home.path)
  }

  const handleApprove = async () => {
    await dispatch(putApproveSeller({ seller_user_id: currentSeller?._id! }))

    navigate(PathApp.home.path)
  }

  if (isSellerLoad === "load") {
    return <FullLoader />
  }

  if (currentSeller === null) {
    return (
      <CenterContainerFlex style={{ height: "100%" }}>
        <TextUI ag={Ag["700_16"]} text={"Владелец не найден"} />
      </CenterContainerFlex>
    )
  }

  return (
    <ColumnContainerFlex>
      <HeaderBack />

      <MainContainer width={680} pl={50} pt={20}>
        <SellerInfo currentSeller={currentSeller} />

        <SellerButtonsGroup pt={20}>
          <MainContainer style={{ width: "50%" }}>
            <RowContainer mb={60}>
              <ButtonUI onClick={() => handleDeny()} $backColor={"red"} mr={10}>
                <TextUI
                  color={getButtonTextColor("red")}
                  ag={Ag["600_16"]}
                  text={"Отклонить"}
                />
              </ButtonUI>

              <ButtonUI onClick={() => handleApprove()}>
                <TextUI
                  color={getButtonTextColor()}
                  ag={Ag["600_16"]}
                  text={"Принять"}
                />
              </ButtonUI>
            </RowContainer>

            <TextUI mb={15} ag={Ag["600_14"]} text="Причина отклонения" />

            <InputUnderline
              value={sellerDenyForm.reason}
              pl={0}
              placeholder={"Введите текст..."}
              onChange={(e) => handleChangeForm(e.target.value)}
            />
          </MainContainer>
        </SellerButtonsGroup>
      </MainContainer>
    </ColumnContainerFlex>
  )
}
