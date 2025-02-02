import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LoginPage.scss";

const LoginPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="login-container" data-aos="fade-in">
            <h1 data-aos="fade-down">Login</h1>
            <form className="login-form" data-aos="zoom-in">
                <div className="form-group" data-aos="fade-right">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group" data-aos="fade-left">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>

                <button type="submit" className="submit-button" data-aos="flip-up">Login</button>
            </form>
            <p data-aos="fade-up">
                Don't have an account? <a href="/entrance" data-aos="zoom-in">Register here</a>
            </p>
        </div>
    );
};

export default LoginPage;
