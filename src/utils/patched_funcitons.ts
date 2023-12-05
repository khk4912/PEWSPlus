import { PEWSWatcher } from './watcher'

export function patchXMLHTTP (): void {
  // eslint-disable-next-line @typescript-eslint/unbound-method

  const lengthOfFrame = window.frames.length
  let target: typeof window | null = null

  for (let i = 0; i < lengthOfFrame; i++) {
    if (window[i].location.href === 'https://www.weather.go.kr/pews/pews2.html') {
      target = window[i] as typeof window
      break
    }
  }

  if (target === null) {
    return
  }

  const watcher = new PEWSWatcher()

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const oldSend = target.XMLHttpRequest.prototype.send

  target.XMLHttpRequest.prototype.send = function (body) {
    console.log(this)
    this.addEventListener('load', function () {
      watcher.handle(this)
    })
    oldSend.call(this, body)
  }
}
