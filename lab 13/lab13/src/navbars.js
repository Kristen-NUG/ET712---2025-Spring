import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbars = function(){
    return(
        <>
         <header><h1>Navigation Bars</h1></header>
        <nav className="navheader">
            <section className="iconlink">
                <a href="https://www.qcc.cuny.edu/index.html" target="blank">QCC</a>
            </section>
            <section>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/about">About Us</Link></button>
                <button><Link to="/contact">Contact Us</Link></button>
            </section>
        </nav>
        </>
    )
}

export default Navbars