import React, { Component } from 'react';
import { v4 as uuidv } from 'uuid';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        let newTodo= {id: uuidv(),task:this.state.todo,isCompleted:false};
        this.props.addTodo(newTodo);
        this.setState({todo: ""})
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='todo'>New Todo:</label>
                <input 
                    type='text'
                    name='todo'
                    id='todo'
                    value={this.state.todo}
                    placeholder='New Todo'
                    onChange={this.handleChange}
                >
                </input>
                <button>Add!!</button>
            </form>
        );
    }
}

export default NewTodoForm;