import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from "../../store/actions/AuthActions";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            email: this.state.email.trim(),
            password: this.state.password.trim()
        })
        
        this.props.loginUser(this.state)
    }

    render() {
        return (
            <div className="container">
                {
                    (this.props.auth && this.props.auth.error) ? (
                        <div className="red-text center">
                            <p>{ this.props.auth.error.message }</p>
                        </div>
                    ) : null                   
                    
                }
                <form onSubmit={ this.onSubmit } className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={ this.onSubmit }>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (creds) => dispatch(loginUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
