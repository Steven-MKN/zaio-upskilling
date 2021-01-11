import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/signup'}>Signup</NavLink>                              
            </li>
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/signin' }>Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks