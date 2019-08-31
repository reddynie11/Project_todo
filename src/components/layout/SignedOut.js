import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOut = ()=>{
    return (
        <ul className="right">
            <li><NavLink to="/">SignUp</NavLink> </li>
            <li><NavLink to="/" style={{marginRight:"50px"}}>LogIn</NavLink> </li>
        </ul>
    )
}
export default SignedOut;