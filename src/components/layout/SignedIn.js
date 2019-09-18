import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedIn = ()=>{
    return(
        <ul className="right" >
            <li><NavLink to="/create">Create Notes</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating orange lighten-1" style={{marginRight:"50px"}} >NR</NavLink></li>
        </ul>
    )
}
export default SignedIn;