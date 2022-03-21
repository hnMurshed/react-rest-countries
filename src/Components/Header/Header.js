import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <h1>Rest Countries</h1>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/country">Countries</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            <h1>Welcome to my Rest Counties</h1>
        </div>
    );
};

export default Header;