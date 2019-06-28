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
                <div className="input-group mb-2">
                    <input type="text" className="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="basic-addon2"
                           value={this.state.title} onChange={this.changeText} />

                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Add Item</button>
                    </div>
                </div>

            </form>
        );
    }
}

export default AddTodoItem;