import React from "react";
import Nav from './Nav';
import logo from '../Images/Logo.svg'

export default function Header(){
    return(
    <header className="header">
        <img src={logo} alt="Little Lemon Logo" />
        <Nav />
    </header>
    );
}