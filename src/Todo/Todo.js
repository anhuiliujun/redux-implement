import React, {PropTypes} from 'react';

const Todo = ({
    text,
    completed,
    onToggleClick
}) => {
    return (
        <li
            style={{textDecoration: completed ? 'line-through': 'none'}}
            onClick={onToggleClick}
        >
            {text}
        </li>
    );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleClick: PropTypes.func
};

export default Todo;