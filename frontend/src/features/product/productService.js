import axios from 'axios'

const API_URL = 'http://localhost:8000/api/products'
const API_USER_URL = 'http://localhost:8000/api/users/products'
const API_ADMIN_URL = 'http://localhost:8000/api/products/admin'

const getProducts = async (categoryName) => {
  const response = await axios.get(`${API_URL}/category/${categoryName}`)

  return response.data
}

const getAdminProducts = async () => {
  const response = await axios.get(`${API_ADMIN_URL}`)
  return response.data
}

const getAllShoes = async () => {
  const response = await axios.get(`${API_URL}/shoes`)

  return response.data
}

const getProduct = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`)

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
  getAdminProducts,
  getProducts,
  getProduct,
  createProduct,
  getUserProducts,
  editProduct,
  deleteProduct,
  getAllShoes,
}

export default productService
