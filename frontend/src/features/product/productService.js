import axios from 'axios'

const API_URL = 'http://localhost:8000/api/products'
const API_USER_URL = 'http://localhost:8000/api/users/products'

const getProducts = async () => {
  const response = await axios.get(`${API_URL}`)

  return response.data
}

const getProduct = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`)

  return response.data
}

// Create new Product
const createProduct = async (productData, token) => {
  console.log(productData, 'DATAAAAACERATE')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, productData, config)

  console.log(response)
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

  return response.data
}

// Edit user Product
const editProduct = async (productData, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(`${API_URL}/${id}`, productData, config)

  return response.data
}

const deleteProduct = async (productId, token) => {
  console.log('service')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`${API_URL}/${productId}`, config)
  console.log(response, 'response')
  return response.data
}

const productService = {
  getProducts,
  getProduct,
  createProduct,
  getUserProducts,
  editProduct,
  deleteProduct,
}

export default productService
