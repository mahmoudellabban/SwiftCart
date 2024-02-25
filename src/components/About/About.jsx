import React from "react";
import { TbWorld } from "react-icons/tb";
import "./about.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaLongArrowAltRight,
} from "react-icons/fa";
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
          Engineering and currently works as a Front End Developer. Down below
          you will find my github account link, feel free to use anything from
          this project's repository, or any other Repositories, they're public.
        </div>
        <div className="second">
          <h2>technologies used</h2>
          <p>
            React <FaLongArrowAltRight /> JavaScript Library
          </p>
          <p>
            Redux <FaLongArrowAltRight /> State Management
          </p>
          <p>
            React Router Dom <FaLongArrowAltRight /> Routing
          </p>
          <p>
            React Spring <FaLongArrowAltRight /> Animation
          </p>
          <p>
            React Loading Skeleton <FaLongArrowAltRight /> Loading
          </p>
          <p>
            React Icons <FaLongArrowAltRight /> Icons
          </p>
          <p>
            Clerk <FaLongArrowAltRight /> Authentication
          </p>
          <p>
            CSS <FaLongArrowAltRight /> Styling
          </p>
          <p>
            Material UI <FaLongArrowAltRight /> Styling
          </p>
          <p>
            Google Fonts <FaLongArrowAltRight /> Fonts
          </p>
        </div>
        <div className="second">
          <h2>Contact me</h2>
          <a
            href="https://github.com/mahmoudellabban"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaGithub /> Github
          </a>
          <a
            href="https://mahmoudellabban.github.io/myWebsite/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <TbWorld /> My Website
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-ellabban/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/mahmoud.ellabban.7"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/mahmoud.ellabban.74/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
