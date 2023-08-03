import { format } from "date-fns"
import { ru } from "date-fns/locale"

export class DateHelper {
  static getFormatDate = (date: Date) => {
    return format(date, "dd.MM.yyyy")
  }

  static getFormatDateOfBack = (date: string) => {
    const dateObj = this.parseDateString(date)

    return format(new Date(dateObj), "dd.MM.yyyy")
  }

  static getFormatDateDTO = (date: Date) => {
    return format(date, "yyyy-MM-dd")
  }

  static getFormatDateChat = (date: string) => {
    const dateObj = this.parseDateString(date)

    return format(new Date(dateObj), "dd MMMM yyyy", { locale: ru })
  }

  static parseDateString = (date: string) => {
    const [year, month, day] = date.split("-")
    return new Date(`${Number(year) + 2000}-${month}-${day}`)
  }
}
