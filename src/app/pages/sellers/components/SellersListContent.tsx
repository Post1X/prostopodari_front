import { useNavigate } from "react-router"
import { MaskHelper } from "../../../helpers/MaskHelper"
import { Seller } from "../../../modules/sellers/models/Seller"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI, getButtonTextColor } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SellersTabMenuType } from "../types/SellersUITypes"
import { SellersListItem } from "../ui/SellersListItem"
import { redirect } from "react-router-dom"

type SellerListProps = {
  sellerList: Seller[]
}

export const SellersListContent = ({ sellerList }: SellerListProps) => {
  const navigate = useNavigate()

  const handleNavigate = (id: string) => {
    navigate(`/seller/${id}`)
  }

  return (
    <>
      {sellerList.map((seller) => (
        <SellersListItem key={seller._id}>
          <div>
            <MainContainer mb={10}>
              <TextUI ag={Ag["400_16"]} text={seller.name} />
            </MainContainer>
            <TextUI
              ag={Ag["400_16"]}
              text={MaskHelper.formatPhoneNumber(seller.phone_number)}
            />
          </div>

          <MainContainer width={170}>
            <ButtonUI
              disabled={seller.status !== SellersTabMenuType.pending}
              onClick={() => handleNavigate(seller._id)}
              $backColor={
                seller.status === SellersTabMenuType.pending
                  ? "border"
                  : "transparent"
              }
            >
              <TextUI
                ag={Ag["400_16"]}
                color={getButtonTextColor("border")}
                text={"Новая"}
              />
            </ButtonUI>
          </MainContainer>
        </SellersListItem>
      ))}
    </>
  )
}
