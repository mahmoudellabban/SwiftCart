import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Skeleton from "react-loading-skeleton";
import "./product.css";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching product data", error);
      }
    };
    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };


  return (
    <div className="container">
      {isLoading ? (
        <>
            <Skeleton
              height={450}
              baseColor="#4343431b"
              highlightColor=" #2014141b"
            />
        </>
      ) : (
        <div className="product-card">
          <div className="img">
            <img src={product.image} alt={product.title} loading="lazy" />
          </div>
          <div className="details">
            <h3>{product.title}</h3>
            <p id="desc">{product.description}</p>
            <p id="cate">{product.category}</p>
            <div className="cart">
              <p>
                <span>price:</span> ${product.price}
              </p>
              <div className="btn">
                <button id="cart-button" onClick={addToCart} >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
