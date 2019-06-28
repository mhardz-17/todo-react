import React, {Component} from 'react';

class TodoItem extends Component {

    render() {
        const {id, title, completed} = this.props.todo;

        return (
            <li style={completed ? completedStatus : {}}>
                <input type="checkbox" onChange={this.props.changeItemStatus.bind(this, id)}/>{title}
                <button style={deleteBtnStyle} onClick={this.props.deleteItem.bind(this, id)}>X</button>
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


export default TodoItem;