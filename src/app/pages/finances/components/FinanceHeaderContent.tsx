import {
  RowContainer,
  RowContainerBeetwen,
  RowContainerBeetwenEnd,
  RowContainerEnd,
} from "../../../template/containers/RowContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SearchContainer } from "../../../components/SearchContainer"
import { SelectCity } from "../../../components/searchCity/components/SelectCity"
import { MockCities } from "../../../components/searchCity/mock/MockCities"

export const FinanceHeaderContent = () => {
  return (
    <RowContainerBeetwenEnd $ph={17} $pv={17}>
      <RowContainerEnd>
        <MainContainer $mr={30}>
          <TextUI mb={20} ag={Ag["500_20"]} text={"Владельцы на выплату"} />
          <SearchContainer value={""} onChangeText={(value: string) => {}} />
        </MainContainer>

        <SelectCity
          currentCity={""}
          cities={MockCities}
          isDefault={true}
          setIsDefault={(value: boolean) => {}}
        />
      </RowContainerEnd>

      <MainContainer></MainContainer>
    </RowContainerBeetwenEnd>
  )
}
