import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { RowContainerBeetwen } from "../../../template/containers/RowContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { BannerUI } from "../ui/BannerUI"

export const CategoriesBanner = () => {
  return (
    <ColumnContainerFlex $pt={30}>
      <TextUI mb={10} ag={Ag["500_14"]} text={"Текущий баннер"} />
      <BannerUI $mb={20}>
        <div className="img" style={{ backgroundColor: ColorsUI.text2 }}></div>
      </BannerUI>
      <RowContainerBeetwen>
        <ButtonUI $mr={10} $backColor={"red"}>
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Удалить"} />
        </ButtonUI>
        <ButtonUI>
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Загрузить"} />
        </ButtonUI>
      </RowContainerBeetwen>
    </ColumnContainerFlex>
  )
}
