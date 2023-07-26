import toast from "react-hot-toast"
import { SellersListItem } from "../../../components/SellerListItem"
import { MaskHelper } from "../../../helpers/MaskHelper"
import {
  FinanceSellerUnit,
  FinanceStatistics,
  FinancesSellers,
} from "../../../modules/sellers/types/FinancesTypes"
import { StyleProp } from "../../../settings/types/BaseTypes"
import { MainContainer } from "../../../template/containers/MainContainer"
import {
  RowContainer,
  RowContainerEnd,
} from "../../../template/containers/RowContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { CopySVG } from "../../../template/ui/CopySVG"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { LineTextVertical } from "../ui/LineTextVertical"
import { useNavigate } from "react-router-dom"
import { PathApp } from "../../../routes/path/PathApp"
import { DateHelper } from "../../../helpers/DateHelper"
import { useAppDispatch } from "../../../settings/redux/hooks"

type FinanceListItemProps = {
  info: FinanceSellerUnit
  finances: FinanceStatistics
  isOrder?: boolean
}

export const FinanceListItem = (props: FinanceListItemProps) => {
  const { info, finances, isOrder } = props

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(finances.paymentCard)
    toast.success("Скопировано!")
  }

  const handleGoOrders = () => {
    // TODO: Убрать статичный id
    // navigate(`${PathApp.finances.path}/${info._id}`)

    navigate(`${PathApp.finances.path}/64bbee260fbf9dbab5755ee7`)
  }

  return (
    <SellersListItem>
      <MainContainer>
        <RowContainer $mb={10}>
          {isOrder ? (
            <>
              <TextUI ag={Ag["400_16"]} text={`Заказ №: НЕ УКАЗАН`} />
              <LineTextVertical />
              <TextUI
                ag={Ag["400_16"]}
                text={`${DateHelper.getFormatDateOfBack(info.dateTime!)}`}
              />
              <LineTextVertical />
              <TextUI ag={Ag["400_16"]} text={`TODO: Время`} />
              <LineTextVertical />
              <TextUI ag={Ag["400_16"]} text={`${info.storeName}`} />
            </>
          ) : (
            <TextUI ag={Ag["400_16"]} text={`${info.ip}: ${info.storeName}`} />
          )}
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`ID: ${info._id || info.orderID}`} />
          <LineTextVertical />
          <TextUI
            ag={Ag["400_16"]}
            text={`${MaskHelper.formatPhoneNumber(info.phone_number)}`}
          />
        </RowContainer>

        <RowContainerEnd>
          <TextUI
            mr={5}
            color={ColorsUI.green}
            ag={Ag["700_16"]}
            text={`+${finances.payAmount}р `}
          />
          <TextUI
            color={ColorsUI.green}
            ag={Ag["400_16"]}
            text={`сумма на выплату`}
          />
          <LineTextVertical />
          <TextUI
            color={ColorsUI.bronze}
            ag={Ag["400_16"]}
            text={`${finances.income}р прибыль`}
          />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`${finances.allAmount}р общая`} />
          <LineTextVertical />
          <TextUI
            mr={5}
            ag={Ag["400_16"]}
            text={`${finances.comission.percent}% комиссия`}
          />
          <TextUI ag={Ag["400_16"]} text={`(`} />
          <TextUI
            color={finances.comission.promo < 0 ? ColorsUI.red : ColorsUI.text1}
            ag={Ag["400_16"]}
            text={`${finances.comission.promo}% промо`}
          />
          <TextUI ag={Ag["400_16"]} text={`)`} />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`${finances.payAmount}р доставка`} />
          <LineTextVertical />
          <RowContainer>
            <TextUI
              mr={10}
              color={ColorsUI.green}
              ag={Ag["400_16"]}
              text={`${finances.paymentCard}`}
            />
            <MainContainer
              onClick={() => handleCopyToClipboard()}
              style={styles.icon}
              $mb={2}
            >
              <CopySVG />
            </MainContainer>
          </RowContainer>
        </RowContainerEnd>
      </MainContainer>

      <RowContainer>
        {!isOrder ? (
          <>
            <MainContainer $mr={15} width={170}>
              <ButtonUI $backColor={"border"} onClick={() => handleGoOrders()}>
                <TextUI ag={Ag["400_16"]} text={"Подробнее"} />
              </ButtonUI>
            </MainContainer>
            <MainContainer width={170}>
              <ButtonUI $backColor={"green"}>
                <TextUI
                  color={ColorsUI.white}
                  ag={Ag["400_16"]}
                  text={"Оплатить"}
                />
              </ButtonUI>
            </MainContainer>
          </>
        ) : (
          <MainContainer width={170}>
            <ButtonUI $backColor={"green"}>
              <TextUI
                color={ColorsUI.white}
                ag={Ag["400_16"]}
                text={"Оплатить"}
              />
            </ButtonUI>
          </MainContainer>
        )}
      </RowContainer>
    </SellersListItem>
  )
}

const styles: StyleProp = {
  icon: {
    cursor: "pointer",
  },
}
