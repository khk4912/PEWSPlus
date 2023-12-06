import type { EarthquakeInfo, EqkInfoParsed, Phase, Station, StationList } from '../types/pews'
import { getStationInfo } from './station'

const HEADER_LEN = 4
const REGIONS = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주'
]

export function stationHandler (byteArray: Uint8Array): StationList | null {
  const newStaList: StationList = []
  const staLatArr: number[] = []
  const staLonArr: number[] = []

  const temp: number[] = []

  for (const i of byteArray) {
    const x = i >> 4
    const y = i & 0b1111
    temp.push(x, y)
  }

  for (let i = 0; i < temp.length; i += 5) {
    let x = 0
    for (let j = 0; j < 5; j++) {
      x |= temp[i + j]
      x <<= 4
    }
    x >>= 4

    staLatArr.push(30 + (x >> 10) / 100)
    staLonArr.push(120 + (x & 0b1111111111) / 100)
  }

  for (let i = 0; i < staLatArr.length; i++) {
    const station: Station = {
      idx: i,
      lat: staLatArr[i],
      lon: staLonArr[i],
      mmi: -1,
      info: getStationInfo(staLatArr[i], staLonArr[i])
    }
    newStaList.push(station)
  }

  if (newStaList.length > 99) {
    return newStaList
  }

  return null
}

export function MMIHandler (byteArray: Uint8Array): EqkInfoParsed {
  let phase: Phase
  let eqkData: EarthquakeInfo

  const phaseHeader = (byteArray[0] << 1) >> 6

  const binDataBits = byteArray.slice(HEADER_LEN, byteArray.length)
  const binData = MMIBinaryHandler(binDataBits)

  switch (phaseHeader) {
    case 0:
      phase = 1
      break
    case 1:
      phase = 4
      break
    case 2:
      phase = 2
      break
    case 3:
      phase = 3
      break
    default:
      phase = 1
  }
  const res: EqkInfoParsed = {
    phase,
    binData
  }

  if (phase === 2 || phase === 3) {
    const bitEqkData = binDataBits.slice(-75)
    eqkData = eqkHandler(bitEqkData)
    res.eqkData = eqkData
  }

  return res
}

function MMIBinaryHandler (data: Uint8Array): number[] {
  const mmiArr: number[] = []

  for (const i of data) {
    mmiArr.push(i >> 4)
    mmiArr.push(i & 0b1111)
  }

  return mmiArr
}

function eqkHandler (eqkData: Uint8Array): EarthquakeInfo {
  // bit 0~9: latitude
  const lat = 30 + ((eqkData[0] << 2) | (eqkData[1] >> 6)) / 100

  // bit 10~19: longitude
  const lon = 124 + (((eqkData[1] & 0b111111) << 4) | (eqkData[2] >> 4)) / 100

  // bit 20~26: magnitude
  const mag = (((eqkData[2] & 0b1111) << 3) | (eqkData[3] >> 5)) / 10

  // bit 27~36: depth
  const dep = (((eqkData[3] & 0b11111) << 5) | (eqkData[4] >> 3)) / 10

  // bit 37~68: time
  const time =
        (((eqkData[4] & 0b111) << 29) |
          (eqkData[5] << 21) |
          (eqkData[6] << 13) |
          (eqkData[7] << 5) |
          (eqkData[8] >> 3)) *
        1000

  // bit 69~94: eqkID
  const eqkID =
        (((eqkData[8] & 0b111) << 23) |
          (eqkData[9] << 15) |
          (eqkData[10] << 7) |
          (eqkData[11] >> 1)) +
        2000000000

  // bit 95~98: max intensity
  const maxIntensity = ((eqkData[11] & 0b1) << 3) | (eqkData[12] >> 5)

  // bit 99~115: max intensity area
  const maxIntensityAreaBits =
        ((eqkData[12] & 0b11111) << 12) | (eqkData[13] << 4) | (eqkData[14] >> 4)
  const maxIntensityArea = []

  if (maxIntensityAreaBits !== 0x1ffff) {
    for (let i = 0; i < 17; i++) {
      if ((maxIntensityAreaBits & (1 << (16 - i))) !== 0) {
        maxIntensityArea.push(REGIONS[i])
      }
    }
  }

  return {
    lat,
    lon,
    time: new Date(time),
    magnitude: mag,
    maxIntensity,
    maxIntensityArea,
    dep,
    eqkID
  }
}
