import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <h1>SwiftCart</h1>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
          </div>
          <div className="btns">
            <button>
              <MdOutlineLogout />
              Register
            </button>
            <button>
              <FaCartPlus />
              Cart (0)
            </button>
          </div>
          <div className="mobile">
            <button className="toggle-button" onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes style={{ color: "white" }} size={20} />
              ) : (
                <FaBars size={20} style={{ color: "white" }} />
              )}
            </button>
            {isOpen && (
              <div className="menu scale-up-tr">
                <div className="Links">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/products"}>Products</Link>
                  <Link to={"/about"}>About</Link>
                </div>
                <div className="Btns">
                  <button>
                    
                    <MdOutlineLogout /> Register
                  </button>
                  <button>
                    
                    <FaCartPlus />
                    Cart (0)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
