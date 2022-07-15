import axios from 'axios'
import apiUrl from '../../apiConfig'

const API_URL = `${apiUrl}/api/orders`

const saveShippingAddress = (data) => {
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

const getOrder = async (orderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${API_URL}/${orderId}`, config)
  console.log(response)

  return response.data
}

const createOrder = async (shippingAddress, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, shippingAddress, config)

  console.log(response)
  return response.data
}

const orderService = { saveShippingAddress, createOrder, getOrder }

export default orderService
