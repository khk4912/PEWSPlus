export type Phase = 1 | 2 | 3 | 4

export interface StationInfo {
  name: string
  code: string
  inOperation: boolean
}
interface StationDatabaseElements extends StationInfo {
  lat: number
  lon: number
}
export type StationDatabase = StationDatabaseElements[]

export interface Station {
  lat: number
  lon: number
  idx: number
  mmi: number
  info: StationInfo | null
}
export type StationList = Station[]

export interface EarthquakeInfo {
  lat: number
  lon: number
  time: Date
  magnitude: number
  maxIntensity: number
  maxIntensityArea: string[]
  dep: number
  eqkID: number
}

export interface EqkInfoParsed {
  phase: Phase
  binData: number[]
  eqkData?: EarthquakeInfo
}
