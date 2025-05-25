import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import login from "../../assets/sign_login.jpg";

const Login = () => {
    return (
        <div className="login-container">
        {/* Left Panel */}
        <div className="login-left">
            <div className="login-form-wrapper">
            <h2 className="login-title">Welcome Back👋 </h2>
            <form>
                <div className="login-field">
                <label>Email address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                />
                </div>
                <div className="login-field">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="*******"
                />
                </div>
                <button
                type="submit"
                className="login-btn"
                >
                Login
                </button>
            </form>
            {/* Divider */}
            <div className="login-divider">
                <hr />
                <span>or</span>
                <hr />
            </div>
            {/* Sign Up Link */}
            <div className="login-signup-link">
                Don't have an account?{" "}
                <Link to="/register" className="login-link">
                  Sign Up
                </Link>
            </div>
            </div>
        </div>
        {/* Right Panel */}
        <div className="login-right">
            <img
            src={ login}
            alt="login"
            />
        </div>
        </div>
    );
};
export default Login;
