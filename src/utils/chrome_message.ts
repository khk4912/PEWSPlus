import type { MessageDataInterface, MessageInterface } from '../types/message'

export async function sendMessage (
  runtime: typeof chrome.runtime | typeof window,
  event: 'init', data?: undefined,
): Promise<void>
export async function sendMessage
  <T extends keyof MessageDataInterface, X extends MessageDataInterface[T]> (
  runtime: typeof chrome.runtime | typeof window,
  event: T,
  data: X
): Promise<void> {
  const msg: MessageInterface = { event }

  if (data !== undefined) {
    msg.data = data
  }

  if (runtime === window) {
    window.postMessage({ type: 'PEWSWatcher', msg }, '*')
    return
  }

  runtime = runtime as typeof chrome.runtime
  await runtime.sendMessage(msg)
}

export function handleMessage (): void {

}
