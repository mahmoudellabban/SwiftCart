// Register.js
import React, { useState } from "react";
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignUp = () => {
    console.log('Signing up with:', email, password);
  };
  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };
  const handleSubmit = () => {
    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="container">
      <div className="register">
        <div className="wrapper">
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <form>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleSubmit}>
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <p onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Login here."
              : "Don't have an account? Sign up here."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
