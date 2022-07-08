import axios from 'axios'

const API_URL = 'http://localhost:8000/api/products'
const API_USER_URL = 'http://localhost:8000/api/users/products'
const API_ADMIN_URL = 'http://localhost:8000/api/products/admin'

const saveShippingAddress = (data) => {
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

const orderService = { saveShippingAddress }

export default orderService
