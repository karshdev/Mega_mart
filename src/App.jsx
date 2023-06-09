import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import { Routes, Route,Navigate } from "react-router-dom"
import Login from './pages/Login'

export default function App() {
  const user=false;
  return (
<Routes>
  
    <Route exact path="/" element={<Home />} /> 
    <Route path="/products/:category" element={<ProductList />} /> 
    <Route path="/product/:id" element={<Product />} /> 
    <Route path="/cart" element={<Cart />} /> 
    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> 
    <Route path="/register" element={user ? <Navigate to="/" /> :<Register />} /> 

</Routes>
  )
}
