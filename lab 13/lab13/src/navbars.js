import React from "react";

const Navbars = function(){
    return(
        <>
         <header><h1>Navigation Bars</h1></header>
        <nav>
            <section>
                <Link>QCC</Link>
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