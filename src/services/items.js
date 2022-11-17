import axios from 'axios'

// TODO: add api base url to .env file 
export const getItem = async (id) => {
  const url = `http://localhost:3000/api/items/${id}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getList = async (params) => {
  const url = 'http://localhost:3000/api/items'
  try {
    const response = await axios.get(url, { params: { q: params } })
    return response.data
  } catch (error) {
    throw error
  }
}
