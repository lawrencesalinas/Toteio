import axios from 'axios'

const API_URL = 'http://localhost:8000/api/orders'

const saveShippingAddress = (data) => {
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

const postOrder = async (orderData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = axios.post(API_URL, orderData, config)
}

const orderService = { saveShippingAddress, postOrder }

export default orderService
