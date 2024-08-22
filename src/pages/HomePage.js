import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to Mentor Booking</h1>
            <p>Find the perfect mentor to guide you through your learning journey.</p>
            <Link to="/book">
                <button className="cta-button">Book a Session Now</button>
            </Link>
        </div>
    );
}

export default HomePage;
