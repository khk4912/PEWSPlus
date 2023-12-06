import type { PEWSWatcher } from './watcher'

export function patchXMLHTTP (watcher: PEWSWatcher): void {
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

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const oldSend = target.XMLHttpRequest.prototype.send

  target.XMLHttpRequest.prototype.send = function (body) {
    this.addEventListener('load', function () {
      watcher.handle(this).catch(console.error)
    })
    oldSend.call(this, body)
  }
}
