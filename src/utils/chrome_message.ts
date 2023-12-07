import type { MessageDataInterface, MessageInterface } from '../types/message'

export async function sendMessage (runtime: typeof chrome.runtime, event: 'init', data?: undefined): Promise<void>
export async function sendMessage<T extends keyof MessageDataInterface, X extends MessageDataInterface[T]> (runtime: typeof chrome.runtime, event: T, data: X): Promise<void> {
  const msg: MessageInterface = { event }

  if (data !== undefined) {
    msg.data = data
  }
  await runtime.sendMessage(msg)
}

export function handleMessage (): void {

}
