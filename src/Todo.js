import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    toggleEditing(){
        this.setState({isEditing: !this.state.isEditing});
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({isEditing: false});
    }
    handleCompletion(){
        this.props.toggleCompletion(this.props.id);
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save!</button>
                    </form>
                </div>
            );
        }else{
            result = (
                <div>
                    <button onClick={this.toggleEditing}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li onClick={this.handleCompletion} className= {this.props.isCompleted? 'completed': ''} >{this.props.task}</li>
                </div>
            );
        }
        return result;
    }
}

export default Todo;