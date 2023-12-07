import type { StationList } from './pews'

export interface MessageDataInterface {
  init: undefined
  stations: StationList
}

export interface MessageInterface {
  event: keyof MessageDataInterface
  data?: MessageDataInterface[keyof MessageDataInterface]

}
