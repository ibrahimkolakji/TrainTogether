import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import loginBild from "../../assets/sign_login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

const Login = () => {
    
      const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
    
      const [err, setErr] = useState(null);
    
      const handlechange = (e) => {
        setInputs((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    const {login} = useContext(AuthContext);
 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
        }catch (err) {
            setErr(err.response.data);
        }
        
    }
     
    return (
        <div className="login-container">
        {/* Left Panel */}
        <div className="login-left">
            <div className="login-form-wrapper">
            <h2 className="login-title">Welcome Back👋 </h2>
            <form>
                <div className="login-field">
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter your Username"
                    name="username"
                    onChange={handlechange}
                />
                </div>
                <div className="login-field">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="*******"
                    name="password"
                    onChange={handlechange}
                />
                </div>
                {err && <span className="error-message">{err}</span>}
                <button
                type="submit"
                className="login-btn"
                onClick = {handleLogin}
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
            src={ loginBild }
            alt="login"
            />
        </div>
        </div>
    );
};
export default Login;
