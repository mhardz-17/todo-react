import React, {Component} from 'react';

class AddTodoItem extends Component {
    state ={
        title: ''
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' });
    }

    changeText =(e) => {
        this.setState({title:e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" value={this.state.title} onChange={this.changeText}/>
                <input type="submit" value="Add Item"/>
            </form>
        );
    }
}

export default AddTodoItem;