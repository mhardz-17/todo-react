import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { fetchTodos, changeTodoStatus } from '../../actions/todoActions'

class Todos extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.newTodo) {
            this.props.posts.unshift(nextProps.newTodo);
        }
    }

    render() {
        const TodoItems = this.props.todos.map((todo) => {
            return (<TodoItem key={todo.id} todo={todo}   />)
        });

        const renderItems = () => {
            if (this.props.todos.length > 0) {
                return (
                    <ul id="my-todo-list" className="list-group" style={ulStyle}>
                        {TodoItems}
                    </ul>
                )
            }

            return (
                <div>No Todo For Today</div>
            )
        };

        return (
            <div>
                {renderItems()}
            </div>
        );
    }
}

const ulStyle = {}

const mapStateToProps = state => ({
    todos: state.todos.items,
    todo: state.todos.newItem
});

export default connect(mapStateToProps, { fetchTodos })(Todos);