import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/AuthActions'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/create' }>New Project</NavLink>                              
            </li>
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '/logout' } >Log Out</NavLink>  
            </li>
            <li>
                <NavLink to={ process.env.PUBLIC_URL + '' } className="btn btn-floating pink lighten-1">{ props.initials }</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)