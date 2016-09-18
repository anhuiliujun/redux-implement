import React, {PropTypes, Component} from 'react';
import {connect} from '../lib/react-redux';
import Todo from './Todo';
import * as types from './constants';

class List extends Component {
    render() {
        const {todos} = this.props;
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onToggleClick={() => {
                                this.props.onToggleClick(todo.id)
                            }}
                        />
                    )
                })}
            </ul>
        )

    }
}

const mapStateToProps = state => ({todos: state});

const mapDispatchToProps = dispatch => ({
    onToggleClick(id) {
        dispatch({
            type: types.TOGGLE_TODO,
            id
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
