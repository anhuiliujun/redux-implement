import * as types from './constants';
import uuid from 'node-uuid';

const todos = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [ ...state, {
                id: uuid.v4(),
                text: action.text,
                completed: false
            }];
        case types.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id == action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return {...todo}
                }
            });
        default:
            return state;
    }
};

export default todos;
