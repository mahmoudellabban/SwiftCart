import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import "./products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        // Slice the first 55 products
        const first55Products = data.slice(0, 48);
        setProducts(data);
        setFilteredProducts(first55Products);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchedProducts();
  }, []);

  return (
    <section className="products-container ">
      <div className="search">
        <input type="search" placeholder="Search..." />
        <IoSearch size={25} className="icon" />
      </div>
      <div className="body">
        <div className="products">
          <div className="data">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="card">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="single">
                  <div className="img">
                  <img
                      src={product.images}
                      alt={product.title}
                      loading="lazy"
                    />
                  </div>
                    <h3>{product.title}</h3>
                    <p>description</p>
                    <p>category</p>
                    <div className="cart">
                      <p>price: ${product.price}</p>
                      <div className="btn">
                      <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="categories">
            <h4>
              <BiCategory size={25} style={{color:"rgba(147,107,249,255)"}} />
              Categories :
            </h4>
            <p>All</p>
            <p>Clothes</p>
            <p>Furniture</p>
            <p>Electronics</p>
            <p>Shoes</p>
            <p>Miscellaneous</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
/*
const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("error fetching data", error);
      };
    };
    fetchData();
  }, [])
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.products);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  */
