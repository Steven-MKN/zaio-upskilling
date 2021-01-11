import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to={ process.env.PUBLIC_URL } className="brand-logo">Mario Plan</Link>

                { props.auth && props.auth.uuid ? <SignedInLinks initials={ props.auth.initials }/> : <SignedOutLinks /> }
                                
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: { ...state.auth.auth }
    }
}

export default connect(mapStateToProps)(Navbar)