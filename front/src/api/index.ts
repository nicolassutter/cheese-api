import API from '../api/axios'
import type { Cheese } from '../../../@types/interfaces/cheese'

/**
 * Gets all the cheese
 *
 * @returns All the cheese
 */
export const getCheeses = async () => {
  try {
    const cheeses = await API({ url: 'http://localhost:4000/cheeses' })
    return cheeses as Cheese[]
  } catch (error) {
    return []
  }
}