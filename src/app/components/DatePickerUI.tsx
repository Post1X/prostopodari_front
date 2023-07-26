import { forwardRef, useRef, useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru"

registerLocale("ru", ru)

import "react-datepicker/dist/react-datepicker.css"
import { MainContainer } from "../template/containers/MainContainer"
import {
  RowContainer,
  RowContainerBeetwen,
} from "../template/containers/RowContainer"
import { CalendarSVG } from "../template/svg/CalendarSVG"
import { Ag, TextUI } from "../template/ui/TextUI"
import { DateHelper } from "../helpers/DateHelper"
import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"

type DatePickerUIProps = {
  date: Date
  changeDate: (date: Date) => void
  minDate?: Date
  maxDate?: Date
}

export const DatePickerUI = (props: DatePickerUIProps) => {
  const calendarRef = useRef<DatePicker>(null)

  const handleOpenCalendar = () => {
    calendarRef.current?.setOpen(true)
  }

  return (
    <DatePicker
      ref={calendarRef}
      customInput={
        <CustomInput onOpenCalendar={handleOpenCalendar} date={props.date} />
      }
      locale={"ru"}
      selected={props.date}
      onChange={(date) => {
        if (date) {
          props.changeDate(date)
        }
      }}
      minDate={props.minDate}
      maxDate={props.maxDate || new Date()}
    />
  )
}

type CustomInputProps = {
  date: Date
  onOpenCalendar: () => void
}

const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  return (
    <CustomInputUI $pv={15} $ph={10} onClick={() => props.onOpenCalendar()}>
      <MainContainer>
        <TextUI
          isNoSelect
          ag={Ag["400_16"]}
          text={DateHelper.getFormatDate(props.date)}
        />
      </MainContainer>
      <CalendarSVG />
    </CustomInputUI>
  )
})

const CustomInputUI = styled(RowContainerBeetwen)`
  width: 120px;
  background-color: ${ColorsUI.blue};
  border-radius: 8px;
`
