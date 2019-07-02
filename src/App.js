import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos/Todos"
import AddTodoItem from "./components/Todos/AddTodoItem"

import { Provider} from 'react-redux';

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
            <div className="App">
                <header className="App-header">
                    <h1>My React Todo List</h1>
                </header>
                <section className="container" style={{marginTop: '5px'}}>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-6" style={entryStyle}>
                            <AddTodoItem />
                            <Todos />
                        </div>
                    </div>
                </section>
            </div>
            </Provider>
        );
    }
}

const entryStyle={
    // width:'500px'
}

export default App;
