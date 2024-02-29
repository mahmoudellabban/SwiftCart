import React, { useState } from "react";
import { FaEyeSlash, FaEye  } from "react-icons/fa";
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      // Simulate API request for sign-up
      // Replace this with your actual API call for sign-up
      // For demonstration, using setTimeout to simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Signing up with:", email, password);
      // You can add your actual sign-up API call or authentication logic here

      // Reset form fields and clear errors on successful sign-up
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      setError("Error during sign-up. Please try again.");
    }
  };

  const handleLogin = async () => {
    try {
      // Simulate API request for login
      // Replace this with your actual API call for login
      // For demonstration, using setTimeout to simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Logging in with:", email, password);
      // You can add your actual login API call or authentication logic here

      // Reset form fields and clear errors on successful login
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                required
                placeholder="Enter your E-mail..."
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your Password..."
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye size={20} style={{color:"black"}} />  : <FaEyeSlash size={20} style={{color:"black"}} />}
              </span>
            </label>
            <br />
            <button type="button" onClick={handleSubmit}>
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
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
