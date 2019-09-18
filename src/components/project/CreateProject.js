import React from 'react';

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
        console.log(this.state)
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
export default CreateProject;