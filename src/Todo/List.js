import React, {PropTypes, Component} from 'react';
import Todo from './Todo';
import * as types from './constants';

class List extends Component {
    render() {
        const {store} = this.props;
        const todos = store.getState();
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onToggleClick={() => {
                                store.dispatch({
                                    type: types.TOGGLE_TODO,
                                    id: todo.id
                                })
                            }}
                        />
                    )
                })}

            </ul>
        )

    }
}

export default List;
