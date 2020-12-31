import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        content: ''
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()

        if (!this.state.content) return

        await this.props.addTodo(this.state)
        
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form className="center" onSubmit={ this.onSubmit }>
                    <label>Add new todo:</label>   
                    
                    <input className="" type="text" value={ this.state.content } onChange={ this.onTextChange } id="content" />                       
                         
                    <button className="btn waves-effect waves-light center" type="submit" name="action">Add
                        <i className="material-icons right">add</i>
                    </button>  
                </form>
            </div>
        )
    }
}

export default AddTodo