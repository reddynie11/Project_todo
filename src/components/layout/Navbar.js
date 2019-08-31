import React from 'react';
import {Link } from 'react-router-dom';

//component
import SignedIn from './SignedIn';

const Navbar = ()=>{
    return (
        <nav className="nav-wrapper grey darken-3" >
            <Link to="/" className="brand-logo" style={{marginLeft:"50px"}}>Jot Pad</Link>
            <SignedIn />
        </nav>
    )
}
export default Navbar;