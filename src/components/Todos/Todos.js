import React, {Component} from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {

    render() {
        const TodoItems = this.props.todos.map((todo) => {
            return (<TodoItem key={todo.id} todo={todo} deleteItem={this.props.deleteItem} changeItemStatus={this.props.changeItemStatus}/>)
        });

        const renderItems = () => {
            if (this.props.todos.length > 0) {
                return (
                    <ul style={ulStyle}>
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

export default Todos;