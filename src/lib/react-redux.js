import React, {Component} from 'react';

export class Provider extends Component {
    static childContextTypes = {
        store: React.PropTypes.object
    };

    getChildContext() {
        return {store: this.props.store};
    }

    render() {
        return this.props.children;
    }
}