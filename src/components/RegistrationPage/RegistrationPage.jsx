import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./RegistrationPage.scss";

const RegistrationPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Easing function (optional)
      once: true, // Animation will trigger only once
    });
  }, []);

  return (
    <div className="registration-container" data-aos="fade-up">
      <h1 data-aos="fade-down">Register</h1>
      <form className="registration-form">
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>

        <div className="form-group" data-aos="fade-right">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group" data-aos="fade-left">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>

        <div className="form-group" data-aos="fade-right">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
        </div>

        <button type="submit" className="submit-button" data-aos="zoom-in">Register</button>
      </form>
      <p data-aos="fade-up">Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default RegistrationPage;
