import React, {PropTypes, Component} from 'react';
import * as types from './constants';

class AddTodo extends Component {
    render() {
        const {store} = this.props;
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