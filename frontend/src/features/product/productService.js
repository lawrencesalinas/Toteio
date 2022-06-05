import axios from 'axios'

const API_URL = 'http://localhost:8000/api/products'

const getProducts = async () => {
  const response = await axios.get(`${API_URL}`)
  console.log(response)
  return response.data
}

// Create new Product
const createProduct = async (productData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.post(API_URL, productData)

  return response.data
}

const productService = {
  getProducts,
  createProduct,
}

export default productService
