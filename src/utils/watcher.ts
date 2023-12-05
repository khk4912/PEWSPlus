const TIMEOUT = 60

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
    if (obj.readyState !== 4) { return }
    this.initStopLoop()

    const target = obj.responseURL.slice(-2)

    switch (target) {
      case 'b':
        this.handleB(obj.response as ArrayBuffer)
        break
      case 's':
        this.handleS(obj.response as ArrayBuffer)
        break
      case 'li':
        this.handleLI(JSON.parse(obj.response as string))
        break
      case 'le':
        this.handleLE(JSON.parse(obj.response as string))
        break
    }
  }

  handleB (data: ArrayBuffer): void {

  }

  handleS (data: ArrayBuffer): void {

  }

  handleLI (data: JSON): void {

  }

  handleLE (data: JSON): void {

  }
}
