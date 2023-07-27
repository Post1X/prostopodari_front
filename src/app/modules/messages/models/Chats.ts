import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"

export class Chats extends AbstractModel {
  name: string = ""
  id: string = ""
  city: string = ""
  phone_number: string = ""
  newMessCount: number = 0
  lastMessage: string = ""

  constructor(props: any) {
    super()
    this.load(props)
  }
}
