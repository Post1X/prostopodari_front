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
    if (date) {
      const dateObj = this.parseDateString(date)

      return format(new Date(dateObj), "dd MMMM yyyy", { locale: ru })
    }
  }

  static parseDateString = (date: string) => {
    return new Date(Date.parse(date))
  }

  static getFormatDateFromShort = (shortDate: string) => {
    const [day, month, year] = shortDate.split("-")
    const fullYear = `20${year}`

    return `${day}.${month}.${fullYear}`
  }

  static getFormatHoursMinutes = (time: string) => {
    if (time) {
      const [hours, minutes] = time.split(":")
      return `${hours}:${minutes}`
    }
  }
}
