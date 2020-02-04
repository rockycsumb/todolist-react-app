import React, {Component} from 'react';
import './TodoItem.css';


class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleClickEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
     
    handleRemove(){
        this.props.removeTask(this.props.id)
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    handleComplete(evt){
        
        this.props.toggleTodo(this.props.id);
    }
  

    render(){
        let result;
        if(this.state.isEditing){
            result = 
                <div className="Todo">
                    <form className="Todo-edit-form">
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange}
                         />
                        <button onClick={this.handleUpdate}>Save</button>

                    </form>
                </div>
        } else {
            result = 
            <div className="Todo">
                <li
                    onClick={this.handleComplete} 
                    className={this.props.completed ? "Todo-task completed" : ""}
                    >
                    {this.props.task}</li>

                    <div className="Todo-buttons">
                        <button onClick={this.handleClickEdit}>
                            <i class='fas fa-pen' />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class='fas fa-trash' />
                        </button>
                    </div>
                    
            </div>
        }

        return result;
    }
}

export default TodoItem;