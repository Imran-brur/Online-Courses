import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Complete Online Courses</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/services">Services</a>
                <button className="btn btn-danger">Log In</button>
            </nav>
        </div>
    );
};

export default Header;