import React, {useState} from "react";
import { Link } from 'react-router-dom'
import logo from '../Images/Logo.svg'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen);};
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#sp">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="#">Order Online</Link></li>
                <li><Link to="#">Login</Link></li>
            </ul>
        </nav>
    );
}