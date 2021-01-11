import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ProjectSummary = ({ project, auth }) => {
    if (!auth || !auth.uuid)
        return <Redirect to={ process.env.PUBLIC_URL + '/signin'} />

    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="cart-title">{ project.title }</span>
                <p>Posted by Name 1</p>
                <p className="grey-text">1st January 2021</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps)(ProjectSummary)