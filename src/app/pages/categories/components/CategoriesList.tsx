import React, { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getCategories,
  selectCatsValues,
} from "../../../modules/categories/CategoriesSlice"
import { Category } from "../../../modules/categories/models/Category"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { CheckboxUI } from "../../../template/ui/CheckboxUI"
import { RowContainer } from "../../../template/containers/RowContainer"
import { DownIconSVG } from "../../../template/svg/DownIconSVG"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ScrollContent } from "../../../components/ScrollContent"
import { CategoriesHelper } from "../../../helpers/CategoriesHelper"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ColorsUI } from "../../../template/styles/ColorUI"

export const CategoriesList = () => {
  const { categoriesList } = useAppSelector(selectCatsValues)
  const dispatch = useAppDispatch()

  const load = useRef(true)

  const [list, setList] = useState<Category[]>([])

  useEffect(() => {
    if (load.current) {
      dispatch(getCategories())
    }

    load.current = false
  }, [])

  useEffect(() => {
    if (categoriesList.length) {
      setList(CategoriesHelper.setDefaultList(categoriesList))
    }
  }, [categoriesList])

  const handleChangeCat = (catId: string, subCatId?: string) => {
    setList(CategoriesHelper.getCats(list, catId, subCatId))
  }

  const handleSaveChange = () => {
    const compareList = CategoriesHelper.compareList({
      originalList: categoriesList,
      modifiedList: list,
    })
  }

  return (
    <ColumnContainerFlex $isRelative>
      <ScrollContent>
        <MainContainer $pt={30} $mb={45}>
          {list.map((cat) => (
            <MainContainer $mb={17} key={cat.catId}>
              <RowContainer>
                <MainContainer width={180} $mr={10}>
                  <CheckboxUI
                    checked={cat.isActive}
                    text={cat.catTitle}
                    onChange={() => handleChangeCat(cat.catId)}
                  />
                </MainContainer>

                {cat.subcats.length ? <DownIconSVG /> : null}
              </RowContainer>

              <MainContainer $mb={cat.subcats.length ? 16 : 0}>
                {cat.subcats.map((subCat) => (
                  <MainContainer $pt={12} $pl={32} key={subCat.subcatId}>
                    <CheckboxUI
                      checked={subCat.isActive}
                      text={subCat.subcatTitle}
                      onChange={() =>
                        handleChangeCat(cat.catId, subCat.subcatId)
                      }
                    />
                  </MainContainer>
                ))}
              </MainContainer>
            </MainContainer>
          ))}
        </MainContainer>
        <ButtonUI onClick={() => handleSaveChange()}>
          <TextUI ag={Ag["400_16"]} color={ColorsUI.white} text={"Сохранить"} />
        </ButtonUI>
      </ScrollContent>
    </ColumnContainerFlex>
  )
}
