import type { Phase, StationList } from '../types/pews'
import * as PEWSClient from './pews_client'

const TIMEOUT = 60

export class PEWSWatcher {
  public stations: StationList = []
  public phase: Phase = 1

  private lastEvent: Date | undefined

  isAlive: boolean = false

  private initStopLoop (): void {
    if (!this.isAlive) {
      this.isAlive = true
      this.lastEvent = new Date()
      void this.stopLoop()
    }
  }

  private async stopLoop (): Promise<void> {
    while (this.isAlive) {
      if (this.lastEvent === undefined) {
        return
      }

      if (this.lastEvent.getTime() + TIMEOUT * 1000 < new Date().getTime()) {
        this.isAlive = false
      }

      await new Promise((resolve) => setTimeout(resolve, 5000))
    }
  }

  async handle (obj: XMLHttpRequest): Promise<void> {
    if (obj.readyState !== 4) { return }
    this.initStopLoop()

    const target = obj.responseURL.slice(-2)

    switch (target) {
      case '.b':
        this.handleB(obj.response as ArrayBuffer)
        break
      case '.s':
        this.handleS(obj.response as ArrayBuffer)
        break
      case 'li':
        this.handleLI(JSON.parse(obj.responseText))
        break
      case 'le':
        this.handleLE(JSON.parse(obj.responseText))
        break
    }
  }

  handleB (data: ArrayBuffer): void {
    const eqKInfo = PEWSClient.MMIHandler(new Uint8Array(data))

    this.phase = eqKInfo.phase

    for (let i = 0; i < this.stations.length; i++) {
      this.stations[i].mmi = eqKInfo.binData[i]
    }
  }

  handleS (data: ArrayBuffer): void {
    this.stations = PEWSClient.stationHandler(new Uint8Array(data)) ?? this.stations
  }

  handleLI (data: JSON): void {

  }

  handleLE (data: JSON): void {

  }
}
