import React from 'react';

const ProjectDetails = (props)=>{
    console.log(props);
    return(
        <div className="container section project-details" >
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Project title</span>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, illum perferendis nostrum voluptas doloremque non dolore nesciunt tenetur est voluptates eveniet iure dolor debitis earum veniam a, consectetur velit aliquid.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by NR</div>
                    <div>Sep 15, 2019 at 11:00</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;