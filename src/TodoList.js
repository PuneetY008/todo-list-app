import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv } from 'uuid';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addTodo(todo){
        this.setState({
            todos: [...this.state.todos,todo]
        });
    }

    removeTodo(id){
        let changedTodos = this.state.todos.filter((todo)=> (id != todo.id));
        this.setState({
            todos: changedTodos
        });
    }

    update(id,editedTask){
        let allTodos = this.state.todos.map(todo=>{
            if(id === todo.id){
                return {...todo,task: editedTask};
            }
            return todo;
        });
        this.setState({
            todos: allTodos
        });
    }

    toggleCompletion(id){
        let allTodos = this.state.todos.map(todo=>{
            if(id === todo.id){
                return {...todo,isCompleted: !todo.isCompleted};
            }
            return todo;
        });
        this.setState({
            todos: allTodos
        });
    }

    render(){
        const allTodos = this.state.todos.map(todo=>
            <Todo task={todo.task} key={todo.id} id={todo.id} isCompleted={todo.isCompleted} removeTodo= {this.removeTodo} updateTodo= {this.update} toggleCompletion= {this.toggleCompletion} />);

        return(
            <div className='TodoList'>
                <h1>Todo List</h1>
                <NewTodoForm addTodo= {this.addTodo} />
                <ul>
                    {allTodos}
                </ul>
            </div>
        );
    }
}

export default TodoList;