import React, {PropTypes, Component} from 'react';
import {connect} from '../lib/react-redux';
import * as types from './constants';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input} />
                <button
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        this.props.onClick(this.input.value);
                        this.input.value = '';
                    }}
                >
                    add todo
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onClick(text) {
        dispatch({
            type: types.ADD_TODO,
            text
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);