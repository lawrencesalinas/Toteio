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
  return response.data
}

const shoppingBagService = {
  getShoppingBag,
}

export default shoppingBagService
