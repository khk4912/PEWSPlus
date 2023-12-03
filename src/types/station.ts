interface Station {
  lat: number
  lon: number
  idx: number
  mmi: number
}

export type StationList = Record<number, Station>
