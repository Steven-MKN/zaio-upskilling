import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signOut } from '../../store/actions/AuthActions'

const Logout = (props) => {   
    console.log(props)

    if (!props.error && props.auth && props.auth.uuid){
        props.signOut()
    } else {
        return <Redirect to={ process.env.PUBLIC_URL + '/' } />
    }
    
    return (
        <div className="container center">
            <p>{ props.error && props.error.message ? props.error.message : 'Signing out...' }</p>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    console.log(state.auth.auth)
    return {
        ...state.auth        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
