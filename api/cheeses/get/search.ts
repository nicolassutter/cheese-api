import { Cheese } from '../../../@types/interfaces/cheese';
import { lower } from '../../../utilities/string';

/**
 * Allows to filter cheeses by given property name
 */
const filter = (cheeses: Cheese[] = [], prop: keyof Cheese = 'name', search: string | string[] = '') => {
  return cheeses.filter(cheese => {
    /**
     * Can be the name, the milk, etc in the current cheese
     */
    const lowerCheeseProp = lower(cheese[prop])
    
    /**
     * If we have multiple filters, like milk
     */
    if (Array.isArray(search)) {
      /**
       * If the current property (cheese, milk, etc) is in the filters
       */
      return search.includes(lowerCheeseProp)
    }
    
    /**
     * If single filter, if the current property includes the search term
     */
    const lowerSearch = lower(search)
    return lowerCheeseProp.includes(lowerSearch)
  })
}

/**
 * Filters the cheeses by name
 */
export const searchByName = (cheeses: Cheese[] = [], name: string) => {
  return filter(cheeses, 'name', name.trim())
}

/**
 * Filters the cheeses by milk type
 */
export const searchByMilk = (cheeses: Cheese[] = [], milk: string) => {
  /**
   * Lower case milks names, trimmed
   */
  const milks = milk.split(',').map(milk => lower(milk).trim())

  return filter(cheeses, 'milk', milks)
}

/**
 * Filters the cheeses, if an image is present
 */
export const searchByImage = (cheeses: Cheese[] = [], value: string | boolean) => {
  /**
   * If param is incorrect
   */
  if (value !== 'true' && value !== 'false' && typeof value !== 'boolean') {
    return cheeses
  }

  let condition = true

  if (value === 'false' || value === false) {
    condition = false
  }

  /**
   * If value === true, we keep only cheeses `with` images.
   * 
   * If value === false, we keep only cheeses `without` images.
   */
  return cheeses.filter(({ image }) => condition ? image : !image)
}