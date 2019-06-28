import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos/Todos"
import AddTodoItem from "./components/Todos/AddTodoItem"

class App extends Component {
    state = {
        todos: [
            {id: 1, title: 'My Task 1', completed: false},
            {id: 2, title: 'My Task 2', completed: false},
            {id: 3, title: 'My Task 3', completed: false},
            {id: 4, title: 'My Task 4', completed: false},
        ]
    }

    deleteItem = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    };

    addItem = (title) => {
        const max_id = parseInt(this.state.todos.map(todo => {return todo.id}).sort().pop()) + 1;
        this.setState({todos: [...this.state.todos, {id: max_id, title: title, completed: false}]})
    }

    changeItemStatus = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }


                return todo;
            })})
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>My React Todo List</h1>
                </header>
                <section className="Container">
                    <AddTodoItem addItem={this.addItem}/>
                    <Todos todos={this.state.todos} deleteItem={this.deleteItem} changeItemStatus={this.changeItemStatus} />
                </section>
            </div>
        );
    }
}

export default App;
