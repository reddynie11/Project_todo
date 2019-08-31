import React from 'react';

//component
import Notification from './Noification';

class Dashboard extends React.Component{
    render(){
        return(
           <div className="dashboard container" >
               <div className="col s12 m7" ></div>
               <div className="col s12 m4"><Notification /></div>
           </div> 
        )
    }
}
