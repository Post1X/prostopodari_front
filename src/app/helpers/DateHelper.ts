import { format } from "date-fns"

export class DateHelper {
  static getFormatDate = (date: Date) => {
    return format(date, "dd.MM.yyyy")
  }

  static getFormatDateOfBack = (date: string) => {
    const [year, month, day] = date.split("-")
    const dateObj = new Date(`${Number(year) + 2000}-${month}-${day}`)

    return format(new Date(dateObj), "dd.MM.yyyy")
  }

  static getFormatDateDTO = (date: Date) => {
    return format(date, "yyyy-MM-dd")
  }
}
