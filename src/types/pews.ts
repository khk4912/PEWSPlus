export type Phase = 1 | 2 | 3 | 4

export type GetSta = (url: string, data?: string) => void
export type GetMMI = (url: string) => void
export type GetLocation = (evtID: string, phase: Phase) => void
