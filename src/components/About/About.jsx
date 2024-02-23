import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const About = () => {
  return (
    <section className="container">
      <h5>
        SwiftCart is an E-commerce demo website designed and developed by 
        <span>
          <a
            href="https://mahmoudellabban.github.io/myWebsite/"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt /> Mahmoud Fathy Ellabban 
          </a>
        </span> 
        who has a Bachelor's degree in Electronics and Communication Engineering
        and currently works as a Front-End Developer
      </h5>
    </section>
  );
};

export default About;
