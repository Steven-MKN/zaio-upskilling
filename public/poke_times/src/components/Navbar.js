import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container row">
            <a className="brand-logo" href="/">Poke'Times</a>
                <ul className="right">
                    <li><NavLink to={ process.env.PUBLIC_URL + "/" }>Home</NavLink></li>
                    <li><NavLink to={ process.env.PUBLIC_URL + "/about" }>About</NavLink></li>
                    <li><NavLink to={ process.env.PUBLIC_URL + "/contact" }>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)