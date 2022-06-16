import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import PrivateRoute from './components/shared/PrivateRoute'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Profile from './pages/Profile'
import ProfileSettings from './pages/ProfileSettings'
import UserProducts from './pages/UserProducts'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='product' element={<Product />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/profile-settings' element={<PrivateRoute />}>
              <Route path='/profile-settings' element={<ProfileSettings />} />
            </Route>
            <Route path='/my-products' element={<PrivateRoute />}>
              <Route path='/my-products' element={<UserProducts />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
