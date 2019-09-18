import React from 'react'

const ProjectSummary = ({ProProject})=>{
    return(
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ProProject.title}</span>
                <p>added by NR</p>
                <p className="grey-text">Sep 3rd, 2019 at 10.00am</p>
            </div>
        </div>
    )
}
export default ProjectSummary;