import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, changeTodoStatus } from '../../actions/todoActions'

class TodoItem extends Component {
    clickDeleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    changeTodoStatus = (id) => {
        this.props.changeTodoStatus(id);
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <li className="list-group-item" style={completed ? completedStatus : {}}>
                <div className="row justify-content-md-center">
                    <div className="col-2">
                        <input type="checkbox" onChange={this.changeTodoStatus.bind(this, id)} />
                    </div>
                    <div className="col-8 text-left">
                        {title}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-sm btn-danger" onClick={this.clickDeleteTodo.bind(this, id)} >Delete</button>
                    </div>
                </div>
            </li>
        );
    }
}

const deleteBtnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff'
}

const completedStatus = {
    color: '#13ff13'
}


export default connect(null, { deleteTodo, changeTodoStatus })(TodoItem);