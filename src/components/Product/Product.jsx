import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching product data", error);
      }
    };
    fetchProduct();
  }, [id]);

  const getCategoryName = (category) => {
    if (category === "naya saman") {
      return "Furniture";
    } else if (category === "Miscellaneous") {
      return "others";
    } else {
      return category;
    }
  };
  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-card">
          <div className="img">
            <img src={product.images} alt={product.title} loading="lazy" />
          </div>
          <div className="details">
          <h3>{product.title}</h3>
          <p id="desc">{product.description}</p>
          <p id="cate">{getCategoryName(product.category.name)}</p>
          <div className="cart">
            <p>
              <span>price:</span> ${product.price}
            </p>
            <div className="btn">
              <button id="cart-button">Add to Cart</button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
