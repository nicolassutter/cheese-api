import API from '../api/axios'
import type { Cheese } from '../../../@types/interfaces/cheese'

/**
 * Gets all the cheese
 *
 * @returns All the cheese
 */
export const getCheeses = async () => {
  try {
    const cheeses = await API({ url: '/cheeses' })
    return cheeses as Cheese[]
  } catch (error) {
    return []
  }
}

/**
 * Gets a specific cheese
 *
 * @returns A cheese
 */
export const getCheese = async (name: string): Promise<Cheese | {}> => {
  try {
    const cheese = await API({ url: `/cheese/${name}` }) as Cheese
    return cheese
  } catch (error) {
    return {}
  }
}

/**
 * Gets a random cheese
 *
 * @returns A cheese
 */
export const getRandomCheese = async (): Promise<Cheese | {}> => {
  try {
    const cheese = await API({ url: '/random' }) as Cheese
    return cheese
  } catch (error) {
    return {}
  }
}

/**
 * Gets a random cheese
 *
 * @returns A cheese
 */
export const searchCheese = async (params: { name?: string, milk?: string }): Promise<Cheese[] | []> => {
  try {
    const cheese = await API({ url: '/search', params }) as Cheese[]
    return cheese
  } catch (error) {
    return []
  }
}