import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <section className="container">
      <div className="home-container">
        <h1>
          Welcome to <span>SwiftCart</span>
        </h1>
        <p>
          Welcome to SwiftCart, where convenience meets speed, and your shopping
          experience is elevated to a new level of efficiency.
        </p>
        <div className="buttons">
          <button>
            <Link to={"products"}>
            Start Shopping
            </Link>
          </button>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
