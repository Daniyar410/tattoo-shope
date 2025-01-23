import React from "react";
import "./LoginPage.scss";

const LoginPage = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>

                <button type="submit" className="submit-button">Login</button>
            </form>
            <p>Don't have an account? <a href="/entrance">Register here</a></p>
        </div>
    );
};

export default LoginPage;
