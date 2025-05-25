import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import login from "../../assets/sign_login.jpg";

const Register = () => {
  return (
    <div className="register-container">
      {/* Left Panel */}
      <div className="register-left">
        <div className="register-form-wrapper">
          <h2 className="register-title">Get Started Now</h2>
          <form>
            <div className="register-field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter a username"
              />
            </div>
            <div className="register-field">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="register-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="*******"
              />
            </div>
            <button
              type="submit"
              className="register-btn"
            >
              Signup
            </button>
          </form>
          {/* Divider */}
          <div className="register-divider">
            <hr />
            <span>or</span>
            <hr />
          </div>
          {/* Sign In Link */}
          <div className="register-signin-link">
            Have an account?{" "}
            <Link to="/login" className="register-link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="register-right">
        <img
          src={ login}
          alt="login"
        />
      </div>
    </div>
  );
};

export default Register;
