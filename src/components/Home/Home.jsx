import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./home.css";

const Home = () => {
  // Define animations using useSpring hook
  const titleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });
  const secondButtonAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1900,
  });

  return (
    <section className="container">
      <div className="home-container">
        {/* Wrap elements with animated from react-spring */}
        <animated.h1 style={titleAnimation}>
          Welcome to <span>SwiftCart</span>
        </animated.h1>
        <animated.p style={textAnimation}>
          Welcome to SwiftCart, where convenience meets speed, and your shopping
          experience is elevated to a new level of efficiency.
        </animated.p>
        <div className="buttons">
          <animated.button style={buttonAnimation}>
            <Link to={"products"}>Start Shopping</Link>
          </animated.button>
          <animated.button style={secondButtonAnimation}>
            <Link to={"/about"}>Learn More</Link>
          </animated.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
