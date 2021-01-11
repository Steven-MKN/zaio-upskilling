import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/AuthActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        this.props.signUp({ ...this.state })
    }

    render() {
        if (this.props.auth && this.props.auth.uuid)
            return <Redirect to={ process.env.PUBLIC_URL + '/'} />

        return (
            <div className="container">
                {
                    (this.props.error && this.props.error) ? (
                        <div className="red-text center">
                            <p>{ this.props.error.message }</p>
                        </div>
                    ) : null                   
                    
                }
                <form onSubmit={ this.onSubmit } className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        ...state.auth
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
