import axios, { AxiosRequestConfig } from 'axios'
export const url = process.env.production ? process.env.API_PROD_URL : process.env.API_DEV_URL

export default async (options: AxiosRequestConfig = {}) => {
  try {
    const URL = url + (options.url || '')
    const { data } = await axios({ ...options, url: URL })
    return data
  } catch (error) {
    throw { error }
  }
}