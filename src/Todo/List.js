import React, {PropTypes, Component} from 'react';

class List extends Component {
    render() {
        const todos = [
            {id: 1, text: 'learn redux', completed: false},
            {id: 2, text: 'learn react', completed: false}
        ];
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}

            </ul>
        )

    }
}

export default List;
