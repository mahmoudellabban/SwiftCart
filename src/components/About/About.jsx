import React from "react";
import "./about.css";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
  function seeWebsite() {
    const websiteUrl = "https://mahmoudellabban.github.io/myWebsite/";
    window.open(websiteUrl, "_blank");
  }
  return (
    <section className="container">
      <div className="info">
        <div className="first">
          SwiftCart is an E-commerce demo website designed and developed by{" "}
          <span onClick={seeWebsite}>
            {" "}
            <FaExternalLinkAlt /> Mahmoud Fathy Ellabban
          </span>{" "}
          who has a Bachelor's degree in Electronics and Communication
          Engineering and currently works as a Front End Developer.
        </div>
        <div className="second">
          <h2>technologies used</h2>
          <p>React <FaLongArrowAltRight /> JavaScript Library</p>
          <p>Redux <FaLongArrowAltRight /> State Management</p>
          <p>Clerk <FaLongArrowAltRight /> Authentication</p>
          <p>CSS <FaLongArrowAltRight /> Styling</p>
          <p>Material UI <FaLongArrowAltRight /> Styling</p>
          <p>React Skeleton <FaLongArrowAltRight /> Loading Skeleton</p>
          <p>React Icons <FaLongArrowAltRight /> Icons</p>
          <p>React Router Dom <FaLongArrowAltRight /> Routing</p>
        </div>
      </div>
    </section>
  );
};

export default About;
