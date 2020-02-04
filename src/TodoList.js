import React, {Component} from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css";


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
                
                
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.update = this.update.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.completed = this.completed.bind(this);
    }

    removeTask(id){
        this.setState({
            todos: this.state.todos.filter(task => task.id !== id)
        });
    }

    addTask(task){
        this.setState({
            todos: [...this.state.todos, task]
         });
    }

    update(id, updatedTask){
        
       const updatedTodos = this.state.todos.map(todo => {
           if(todo.id === id){
               return {...todo, task: updatedTask};
           }
           return todo;
       });
       this.setState({ todos: updatedTodos})
    }

    completed(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({ todos: updatedTodos})
    }


    

    renderTodos(){
        return(
            this.state.todos.map(item =>(
                <TodoItem
                    id={item.id}
                    task={item.task}
                    completed={item.completed}
                    removeTask={this.removeTask}
                    updateTodo={this.update}

                    toggleTodo={this.completed}
                    
                />
            ))
        )
    }

    render(){
        return(
            <div className="TodoList">
                <h1>todo list<span>A Simple List</span></h1>
                
                <ul>
                {this.renderTodos()}
                </ul>
                <NewTodoForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default TodoList;