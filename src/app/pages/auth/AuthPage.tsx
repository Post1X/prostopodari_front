import { Ag, TextUI } from "../../template/TextUI"
import {
  CenterContainer,
  CenterContainerFlex,
} from "../../template/ui/CenterContainer"
import { AuthGiftImage } from "./ui/AuthGiftImage"
import {
  AuthEllipseBottom,
  AuthEllipseTop,
  AuthHorizontalLine,
  AuthVerticalLine,
  AuthWhiteLine,
} from "./ui/AuthFigures"
import { AuthImage, AuthLogo } from "./ui/AuthContainers"
import { LogoSVG } from "../../template/svg/LogoSVG"
import { AuthForm } from "./ui/AuthForm"
import { ColorsUI } from "../../template/styles/ColorUI"
import { RowContainer } from "../../template/ui/RowContainer"
import { AuthGiftSVG } from "./ui/AuthGiftSVG"
import { css } from "styled-components"
import { StyleProp } from "../../settings/types/BaseTypes"
import { InputUnderline } from "../../components/InputUnderline"
import { ButtonUI } from "../../template/ButtonUI"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import { changeForm, selectAuthForm } from "../../modules/auth/AuthSlice"
import {
  AuthFormKeys,
  AuthFormValidation,
} from "../../modules/auth/form/AuthForm"

export const AuthPage = () => {
  const authForm = useAppSelector(selectAuthForm)

  const dispatch = useAppDispatch()

  return (
    <CenterContainerFlex>
      <AuthVerticalLine />
      <AuthHorizontalLine />

      <CenterContainer style={styles.container}>
        <AuthImage>
          <AuthEllipseTop size={5} />
          <AuthEllipseBottom size={14} />
          <AuthGiftImage src="src/app/template/assets/img/gift.png" />
          <AuthWhiteLine />
        </AuthImage>

        <AuthLogo>
          <LogoSVG />
        </AuthLogo>

        <AuthForm>
          <CenterContainerFlex style={styles.containerForm}>
            <RowContainer mb={50}>
              <div style={styles.icon}>
                <AuthGiftSVG />
              </div>
              <TextUI ag={Ag["500_18"]} text={"Войти в учетную запись"} />
            </RowContainer>

            <div style={styles.inputs}>
              <InputUnderline
                name={"email"}
                value={authForm.email}
                onChange={(e) => {
                  dispatch(
                    changeForm({
                      key: AuthFormKeys.email,
                      value: e.target.value,
                    }),
                  )
                }}
                mb={35}
                placeholder={"Email"}
              />
              <InputUnderline
                type={"password"}
                value={authForm.password}
                onChange={(e) => {
                  dispatch(
                    changeForm({
                      key: AuthFormKeys.password,
                      value: e.target.value,
                    }),
                  )
                }}
                mb={50}
                placeholder={"Пароль"}
              />

              <ButtonUI
                disabled={!AuthFormValidation.isValidForm(authForm)}
                type={"button"}
              >
                {"Войти"}
              </ButtonUI>
            </div>
          </CenterContainerFlex>
        </AuthForm>
      </CenterContainer>
    </CenterContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    zIndex: 50,
  },
  containerForm: {
    backgroundColor: ColorsUI.white,
  },
  icon: {
    marginRight: 10,
  },
  inputs: {
    maxWidth: 274,
    minWidth: 120,
  },
}
