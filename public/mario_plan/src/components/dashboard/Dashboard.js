import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { getProjects, getProjectCount } from '../../store/actions/ProjectActions'
import { getNotifications } from '../../store/actions/NotificationActions'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProjects(1)
        this.props.getNotifications()
        this.props.getProjectCount()
        //get auth state
    }

    // onPaginationButtonClick(page){
    //     this.props.getProjects(page)
    // }

    render() {

        if (!this.props.auth || !this.props.auth.uuid)
            return <Redirect to={process.env.PUBLIC_URL + '/signin'} />

        // let count = this.props.projectPage.of        
        // let pageButtons = []

        // for (let i = 1; i <= count; i++){
        //     pageButtons.push(
        //         <li className={ this.props.projectPage.on === i ? 'active' : 'waves-effect' } onClick={ () => this.onPaginationButtonClick(i) } key={ i }><a href="#!">{ i }</a></li>
        //     )
        // }

        return (
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects} />
                    
                        {/* <div className="section">
                            <ul className="pagination center">
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                                {
                                    pageButtons   
                                }                                
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={this.props.notifications} />
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
        notifications: state.notification.notifications,
        projectPage: state.project.projectPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: (pageNum) => {
            dispatch(getProjects(pageNum))
        },
        getNotifications: () => {
            dispatch(getNotifications())
        },
        getProjectCount: () => {
            dispatch(getProjectCount())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)