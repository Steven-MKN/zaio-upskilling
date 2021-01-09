import React from 'react'

const ProjectSummary = ({ project }) => {
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

export default ProjectSummary