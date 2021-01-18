import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return(
        <div className="section project-list col s12">
            { projects && projects.map(p => {
                return (
                    <Link to={ process.env.PUBLIC_URL + '/project/' + p.id } key={ p.id }>
                        <ProjectSummary project={ p } key={ p.id }/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList