import React from "react";
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul className={'nav-links'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="#">Order Online</Link></li>
                <li><Link to="#">Login</Link></li>
            </ul>
        </nav>
    );
}