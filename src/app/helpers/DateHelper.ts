import { format } from "date-fns"
import { ru } from "date-fns/locale"

export class DateHelper {
  static getFormatDate = (date: Date) => {
    return format(date, "dd.MM.yyyy")
  }

  static getFormatDateOfBack = (date: string) => {
    if (date) {
      const dateObj = this.parseDateString(date)

      return format(new Date(dateObj), "dd.MM.yyyy")
    }
  }
  static getFormatDateOfPoints = (date: string) => {
    if (date) {
      const parts = date.split("-")
      const year = parseInt(parts[0]) + 2000
      const month = parseInt(parts[1]) - 1
      const day = parseInt(parts[2])

      return format(new Date(year, month, day), "dd.MM.yyyy")
    }
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

  static getFormatLongDate = (longDate: string) => {
    if (longDate) {
      const date = new Date(longDate)
      const day = String(date.getDate()).padStart(2, "0")
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const year = String(date.getFullYear()).slice(-2)

      return `${day}.${month}.${year}`
    }
  }

  static getFormatHoursMinutes = (time: string) => {
    if (time) {
      const [hours, minutes] = time.split(":")
      return `${hours}:${minutes}`
    }
  }
}
