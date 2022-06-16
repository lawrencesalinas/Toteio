import axios from 'axios'

const API_URL = 'http://localhost:8000/api/products'
const API_USER_URL = 'http://localhost:8000/api/users/products'

const getProducts = async () => {
  const response = await axios.get(`${API_URL}`)
  console.log(response)
  return response.data
}

// Create new Product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, productData, config)

  return response.data
}

// Get user products
const getUserProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_USER_URL, config)
  console.log(response)
  return response.data
}

const productService = {
  getProducts,
  createProduct,
  getUserProducts,
}

export default productService
