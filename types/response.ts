import { Response } from 'express'

export default interface _Response extends Response {
  not_found: (message: string) => void
}