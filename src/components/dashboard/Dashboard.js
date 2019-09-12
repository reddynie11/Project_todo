import React from 'react';

//component
import ProjectList from '../project/ProjectList';
import Notification from './Noification';

class Dashboard extends React.Component{
    render(){
        return(
           <div className="dashboard container" >
               <div className="row">
                 <div className="col s12 m8" ><ProjectList /></div>
                 <div className="col s12 m3 offset-m1"><Notification /></div>
               </div>
           </div> 
        )
    }
}
export default Dashboard;