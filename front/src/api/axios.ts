import axios, { AxiosRequestConfig } from 'axios'

export default async (options: AxiosRequestConfig = {}) => {
  try {
    const { data } = await axios({ ...options })
    return data
  } catch (error) {
    throw { error }
  }
}