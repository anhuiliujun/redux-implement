import React, {PropTypes, Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render() {
        const todos = [
            {id: 1, text: 'learn redux', completed: false},
            {id: 2, text: 'learn react', completed: true}
        ];
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                        />
                    )
                })}

            </ul>
        )

    }
}

export default List;
