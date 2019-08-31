import React from 'react';
import {Link } from 'react-router-dom';

//component
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const Navbar = ()=>{
    return (
        <nav className="nav-wrapper grey darken-3" >
            <Link to="/" className="brand-logo" style={{marginLeft:"50px"}}>Jot Pad</Link>
            <SignedIn />
            <SignedOut />
        </nav>
    )
}
export default Navbar;