import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import Success from './pages/Success'
import { useSelector } from 'react-redux'
import Donate from './pages/Donate'

const App = () => {

  const user = useSelector((state)=>state.user.currentUser);

  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/products/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
      <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>}/>
      </Routes>
    </Router>
  )
}

export default App