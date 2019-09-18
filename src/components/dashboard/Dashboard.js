import React from 'react';
import { connect } from 'react-redux';

//component
import ProjectList from '../project/ProjectList';
import Notification from './Noification';

class Dashboard extends React.Component{
    render(){
        const {projectInProps} = this.props;
        return(
           <div className="dashboard container" >
               <div className="row">
                 <div className="col s12 m8" ><ProjectList projects={projectInProps} /></div>
                 <div className="col s12 m3 offset-m1"><Notification /></div>
               </div>
           </div> 
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        projectInProps : state.rrProject.prProjects
    }
}

export default connect(mapStateToProps)(Dashboard);