import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import "./products.css";

const Products = () => {
  //fetching data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //search and category filter
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error fethcing data", error);
      }
    };
    fetchedData();
  }, []);
  // Filtered products based on search term and category
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;
    const titleMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return categoryMatch && titleMatch;
  });
  const handleCategorySelect = (category) => {
    setCategory(category);
  };
  return (
    <section className="products-container ">
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch size={25} className="icon" />
      </div>
      <div className="body">
        <div className="products">
          <div className="data">
            {loading ? (
              <>
                <div className="card">
                  <Skeleton
                    height={450}
                    baseColor="#4343431b"
                    highlightColor=" #2014141b"
                  />
                  <Skeleton
                    height={450}
                    baseColor="#4343431b"
                    highlightColor=" #2014141b"
                  />
                  <Skeleton
                    height={450}
                    baseColor="#4d47471b"
                    highlightColor=" #2014141b"
                  />
                </div>
              </>
            ) : (
              <div className="card">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="single">
                    <div className="img">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                      />
                    </div>
                    <h3>{product.title}</h3>
                    <p id="desc">
                      {product.description.split(" ").slice(0, 8).join(" ")}...
                      <span>
                        <Link to={`/products/${product.id}`}>read more</Link>
                      </span>
                    </p>
                    <p id="cate">{product.category}</p>
                    <div className="cart">
                      <p>
                        <span>price</span> ${product.price}
                      </p>
                      <div className="btn">
                        <button id="cart-button">
                          <Link to={`/products/${product.id}`}>
                            add to cart
                          </Link>
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
            className={category === "All" ? "active" : ""}
            onClick={() => handleCategorySelect("All")}
          >
            All
          </p>
          <p
            className={category === "men's clothing" ? "active" : ""}
            onClick={() => handleCategorySelect("men's clothing")}
          >
            Men's clothing
          </p>
          <p
            className={category === "women's clothing" ? "active" : ""}
            onClick={() => handleCategorySelect("women's clothing")}
          >
            Women's clothing
          </p>
          <p
            className={category === "electronics" ? "active" : ""}
            onClick={() => handleCategorySelect("electronics")}
          >
            Electronics
          </p>
          <p
            className={category === "jewelery" ? "active" : ""}
            onClick={() => handleCategorySelect("jewelery")}
          >
            Jewelery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
