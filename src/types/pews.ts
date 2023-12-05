export type Phase = 1 | 2 | 3 | 4

export type GetSta = (url: string, data?: string) => void
export type GetMMI = (url: string) => void
export type GetLocation = (evtID: string, phase: Phase) => void

export interface StationInfo {
  name: string
  code: string
  inOperation: boolean
}
interface StationDatabaseElements extends StationInfo {
  lat: number
  lon: number
}
export type StationDatabse = StationDatabaseElements[]

interface Station {
  lat: number
  lon: number
  idx: number
  mmi: number
}
export type StationList = Record<number, Station>
