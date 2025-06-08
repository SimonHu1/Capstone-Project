import React from "react";
import Nav from './Nav';
import logo from '../src/Images/Logo.svg'

export default function Header(){
    return(
    <header>
        <meta name="description" content="A restaurant located in Chicago"/>
        <meta name="og:title" content="Little Lemon Restaurant Website"/>
        <meta name="og:description" content="A restaurant located in Chicago"/>
        <meta name="og:image" content="Images/restuarant chef B.jpg"/>
        <img src={logo} alt="Little Lemon Logo" />
        <Nav />
    </header>
    );
}