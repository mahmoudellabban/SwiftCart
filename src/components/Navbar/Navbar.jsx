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
          <h1>
            <Link to={"/"}>SwiftCart</Link>
          </h1>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
          </div>
          <div className="btns">
            <Link to={"auth"}>
              <MdOutlineLogout />
              Register
            </Link>
            <Link to={"cart"}>
              <FaCartPlus />
              Cart (0)
            </Link>
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
                <FaTimes onClick={toggleMenu} id="close" />
                <div className="Links">
                  <Link to={"/"} onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link to={"/products"} onClick={toggleMenu}>
                    Products
                  </Link>
                  <Link to={"/about"} onClick={toggleMenu}>
                    About
                  </Link>
                </div>
                <div className="Btns">
                  <Link to={"auth"}>
                    <MdOutlineLogout />
                    Register
                  </Link>
                  <Link to={"cart"}>
                    <FaCartPlus />
                    Cart (0)
                  </Link>
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
