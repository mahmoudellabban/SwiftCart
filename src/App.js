import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import Products from "./components/Products/Products"
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App