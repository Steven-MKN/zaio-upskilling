import React,  { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { getProjects } from '../../store/actions/ProjectActions'
import { getNotifications } from '../../store/actions/NotificationActions'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
    componentDidMount() {
        this.props.getProjects()
        this.props.getNotifications()
        //get auth state
    }

    render(){

        if (!this.props.auth || !this.props.auth.uuid)
            return <Redirect to={ process.env.PUBLIC_URL + '/signin'} />

        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ this.props.projects }/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={ this.props.notifications }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        auth: state.auth.auth,
        notifications: state.notification.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => {
            dispatch(getProjects())
        },
        getNotifications: () => {
            dispatch(getNotifications())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)