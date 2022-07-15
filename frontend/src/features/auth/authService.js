import axios from 'axios'
import apiUrl from '../../apiConfig'

const API_URL = `${apiUrl}/api/users`

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  // save response to local storage including token, wrap in JSON because local storage can only hold string
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login a user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)

  // save response to local storage including token,
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout a user
const logout = () => localStorage.removeItem('user')

// Update a user
const updateUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.put(API_URL, userData, config)
  console.log(response.data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// export functions we created
const authService = {
  register,
  login,
  logout,
  updateUser,
}

export default authService
