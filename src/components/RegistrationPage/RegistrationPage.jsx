import React from "react";
import "./RegistrationPage.scss";

const RegistrationPage = () => {
    return (
        <>
            <div className="registration-container">
                <h1>Register</h1>
                <form className="registration-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                    </div>

                    <button type="submit" className="submit-button">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login here</a></p>
            </div>

        </>
    );
};

export default RegistrationPage;
