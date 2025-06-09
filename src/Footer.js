import React from 'react';
import logo from './Images/Logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={logo} alt="Little Lemon logo" />
            </div>
            <div>
                <h4>Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <p>Address<br />Phone number<br />Email</p>
            </div>
            <div>
                <h4>Social Media</h4>
                <p>Instagram<br />Facebook<br />Twitter</p>
            </div>
        </footer>
    );
}
