import React from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';

class CreateProject extends React.Component{
    state={
        title:'',
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createProject(this.state)
    }
    render(){
        return(
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3" >Create</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Description</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>   
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        createProject : (project)=>{ dispatch(createProject(project))}
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);