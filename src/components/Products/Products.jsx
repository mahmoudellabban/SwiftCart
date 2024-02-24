import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import "./products.css";

const Products = () => {
  // fetching data and filter them
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //fetch
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        // Slice the first 46 products
        const first46Products = data.slice(0, 46);
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchedProducts();
  }, []);
  //filter
  const getCategoryName = (category) => {
    if (category === "naya saman") {
      return "Furniture";
    } else if (category === "Miscellaneous") {
      return "others";
    } else {
      return category;
    }
  };
  //filter
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products
        .slice(1, 47)
        .filter(
          (product) =>
            getCategoryName(product.category.name) === selectedCategory
        );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  //search
  useEffect(() => {
    const filtered = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm, filteredProducts]);

  return (
    <section className="products-container ">
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoSearch size={25} className="icon" />
      </div>
      <div className="body">
        <div className="products">
        <div className="data">
        {isLoading ? (
          <>
            loading...
          </>
        ) : (
          <div className="card">
            {searchResults.map((product) => (
              <div key={product.id} className="single">
                <div className="img">
                  <img src={product.images} alt={product.title} loading="lazy" />
                </div>
                <h3>{product.title}</h3>
                <p id="desc">{product.description.split(' ').slice(0, 8).join(' ')}...
                <span>
                  <Link to={`/products/${product.id}`}>
                    read more
                  </Link>
                </span></p>
                <p id="cate">{getCategoryName(product.category.name)}
                  
                </p>
                <div className="cart">
                  <p>
                    <span>price</span> ${product.price}
                  </p>
                  <div className="btn">
                    <button id="cart-button">
                      <Link to={`/products/${product.id}`}>add to cart</Link>
                    </button>
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
            <BiCategory size={25} style={{ color: "rgba(147,107,249,255)" }} />
            Categories :
          </h4>
          <p
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleCategorySelect("All")}
          >
            All
          </p>
          <p
            className={selectedCategory === "Clothes" ? "active" : ""}
            onClick={() => handleCategorySelect("Clothes")}
          >
            Clothes
          </p>
          <p
            className={selectedCategory === "Furniture" ? "active" : ""}
            onClick={() => handleCategorySelect("Furniture")}
          >
            Furniture
          </p>
          <p
            className={selectedCategory === "Electronics" ? "active" : ""}
            onClick={() => handleCategorySelect("Electronics")}
          >
            Electronics
          </p>
          <p
            className={selectedCategory === "Shoes" ? "active" : ""}
            onClick={() => handleCategorySelect("Shoes")}
          >
            Shoes
          </p>
          <p
            className={selectedCategory === "others" ? "active" : ""}
            onClick={() => handleCategorySelect("others")}
          >
            others
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;