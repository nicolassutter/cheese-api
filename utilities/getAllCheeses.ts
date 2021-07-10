import fs from 'fs'
import { Cheese } from '../@types/interfaces/cheese'
const fsPromises = fs.promises
const path = require('path')

const directoryPath = path.join(__dirname, '../cheeses')
const extension = '.json'

/**
 * Get every file in giver directory, with given extension
 */
export const getAllCheeses = async () => {
  try {
    const promises = await fsPromises.readdir(directoryPath)
    const files = promises.filter((file: string) => file.endsWith(extension))

    const cheeses = files.reduce((acc: Cheese[], current: string) => {
      const data = require(`${directoryPath}/${current}`)
      acc.push(data)
      return acc
    }, [])
  
    return cheeses
  } catch (_) {
    return []
  }
}