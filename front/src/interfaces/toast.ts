export default interface Toast {
  message: string
  id?: string
}

export interface Toaster {
  toasts: Toast[]
}