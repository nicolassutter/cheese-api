import type Toast from '../interfaces/toast'
import type { Toaster } from '../interfaces/toast'
import { writable } from 'svelte/store'

export const toaster = writable<Toaster>({
  toasts: []
})

export const push = (toast: Toast) => {
  toaster.update(_toaster => {
    if (toast?.message) {
      /**
       * Svelte isn't reactive with push
       */
      const index = _toaster.toasts.length
      const id = `toast-${index}-${Math.floor(Math.random() * 49.2)}`
      _toaster.toasts[index] = { ...toast, id }

      /**
       * Delete the pushed toast after a second
       */
      setTimeout(() => {
        toaster.update(_toaster => {
          _toaster.toasts = _toaster.toasts.filter(toast => toast.id !== id)
          return _toaster
        })
      }, 1000)
    }

    return _toaster
  })
}