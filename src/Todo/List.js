import React, {PropTypes, Component} from 'react';
import Todo from './Todo';
import * as types from './constants';

class List extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    componentDidMount() {
        const {store} = this.context;
        this.listener = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        this.listener()
    }

    render() {
        const {store} = this.context;
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
