import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Mentor Booking</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booked-session">Book a Session</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
