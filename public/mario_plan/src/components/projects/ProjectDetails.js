import React from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../store/actions/ProjectActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    if (!props.auth || !props.auth.uuid)
        return <Redirect to={ process.env.PUBLIC_URL + '/signin'} />

    if (props.noProj) props.getProject(props.match.params.id)
    return (
        <div className="container section preoject-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ props.project.title } - { props.project.id }</span>
                    <p>{ props.project.content }</p>                
                </div>
                <div className="card-action grey lighten-4 grey grey-text">
                    <div>Posted by { props.project.authorFirstName }</div>
                    <div>{ moment(props.project.createdAt.toDate()).calendar() }</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    // eslint-disable-next-line
    const project = state.project.projects.find(p => p.id == id)
    
    if (project === undefined) {
        return {
            noProj: true,
            project: {},
            auth: state.auth.auth
        }
    } else {
        return {
            project,
            auth: state.auth.auth
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: (id) => {
            dispatch(getProject(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
