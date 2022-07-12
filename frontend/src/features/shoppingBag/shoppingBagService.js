import axios from 'axios'

const API_URL = 'http://localhost:8000/api/shoppingBag'

const getShoppingBag = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  console.log(response)
  localStorage.setItem('cartItems', JSON.stringify(response.data))

  return response.data
}

const addToShoppingBag = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, productId, config)

  return response.data
}

const deleteShoppingBagItem = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  console.log('service')

  const response = await axios.delete(`${API_URL}/${productId}`, config)
  console.log(response, 'response')
  return response.data
}

const shoppingBagService = {
  getShoppingBag,
  addToShoppingBag,
  deleteShoppingBagItem,
}

export default shoppingBagService
