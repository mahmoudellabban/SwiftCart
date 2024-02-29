import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
