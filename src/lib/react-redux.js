import React, {PropTypes, Component} from 'react';

export class Provider extends Component {
    static childContextTypes = {
        store: React.PropTypes.object
    };

    getChildContext() {
        return {store: this.props.store};
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class ConnectInnerComponent extends Component {
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
            return (
                <WrappedComponent
                    {...this.props}
                    {...mapStateToProps(store.getState())}
                    {...mapDispatchToProps(store.dispatch)}
                />
            )
        }
    }
    return ConnectInnerComponent;
};