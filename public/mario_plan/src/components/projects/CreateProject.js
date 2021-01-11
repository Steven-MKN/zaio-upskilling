import React, { Component } from 'react'
import { createProject } from '../../store/actions/ProjectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        this.props.createProject(this.state)
    }

    render() {
        if (!this.props.auth || !this.props.auth.uuid)
            return <Redirect to={ process.env.PUBLIC_URL + '/signin'} />

        return (
            <div className="container">
                <form onSubmit={ this.onSubmit } className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={ this.onTextChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={ this.onTextChange } ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
