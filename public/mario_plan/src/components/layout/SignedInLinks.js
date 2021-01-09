import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/create' }>New Project</NavLink>                              
            </li>
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/logout' }>Log Out</NavLink>  
            </li>
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '' } className="btn btn-floating pink lighten-1">ST</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks