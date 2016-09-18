import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todo/List';
import AddTodo from './Todo/AddTodo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <AddTodo store={this.props.store} />
                <TodoList store={this.props.store} />
            </div>
        );
    }
}

export default App;
