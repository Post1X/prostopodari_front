import React from "react"
import {
  RowContainer,
  RowContainerStart,
} from "../../../template/containers/RowContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { Seller } from "../../../modules/sellers/models/Seller"
import { MaskHelper } from "../../../helpers/MaskHelper"

type SellerInfoProps = {
  currentSeller: Seller
}

export const SellerInfo = ({ currentSeller }: SellerInfoProps) => {
  return (
    <RowContainerStart>
      <MainContainer mb={50} mr={130}>
        <TextUI mb={15} ag={Ag["600_14"]} text={"Имя"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.name || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Почта"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.email || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Телефон"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={
            MaskHelper.formatPhoneNumber(currentSeller.phone_number) ||
            "Не указан"
          }
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Город"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.city || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Адрес"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.address || "Не указан"}
        />
      </MainContainer>

      <MainContainer>
        <TextUI mb={15} ag={Ag["600_14"]} text={"Фирма"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.ip || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Юридическое название"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.legal_name || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"ИНН"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.inn || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"ОГРН"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.ogrn || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Рассчетный счет"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={currentSeller.bill_number || "Не указан"}
        />
      </MainContainer>
    </RowContainerStart>
  )
}
