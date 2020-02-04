import React, {Component} from 'react';


class EditTaskForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            edittask: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.update(this.props.id, this.state.edittask)
    }

    render(){
        return(
            
        )
    }
}

export default EditTaskForm;