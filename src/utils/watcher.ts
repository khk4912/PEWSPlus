const TIMEOUT = 60

type WebDetails = chrome.webRequest.WebResponseCacheDetails

export class PEWSWatcher {
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

  handle (obj: XMLHttpRequest): void {
    console.log(obj.responseURL)
  }

  handleB (obj: WebDetails): void {
    this.initStopLoop()
  }

  handleS (obj: WebDetails): void {
    this.initStopLoop()
  }

  handleLI (obj: WebDetails): void {
    this.initStopLoop()
  }

  handleLE (obj: WebDetails): void {
    this.initStopLoop()
  }
}
