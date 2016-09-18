import React, {PropTypes, Component} from 'react';
import * as types from './constants';

class AddTodo extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const {store} = this.context;
        return (
            <div>
                <input type="text" ref={input => this.input = input} />
                <button
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        store.dispatch({
                            type: types.ADD_TODO,
                            text: this.input.value
                        });
                        this.input.value = '';
                    }}
                >
                    add todo
                </button>
            </div>
        )
    }
}

export default AddTodo;