import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        setFilteredProducts(first46Products);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchedProducts();
  }, []);

  const getCategoryName = (category) => {
    if (category === "naya saman") {
      return "Furniture";
    } else if (category === "Miscellaneous") {
      return "others";
    } else {
      return category;
    }
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products.slice(0, 46));
    } else {
      const filtered = products.slice(0,46).filter(
        (product) => getCategoryName(product.category.name) === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
                    <p className="cate">
                      {getCategoryName(product.category.name)}
                    </p>
                    <div className="cart">
                      <p>
                        <span>price</span> $ {product.price}
                      </p>
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
            <BiCategory
              size={25}
              style={{ color: "rgba(147,107,249,255)" }}
            />
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