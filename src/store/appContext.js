import React, { Component } from 'react';
import getState from './flux';
export const Context = React.createContext(null);
const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props) {
            super(props);
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updateStore => this.setState({
                    store: Object.assign(this.state.store, updateStore),
                    actions: { ...this.state.actions }
                })
            })
        }
        componentDidMount() {
            this.state.actions.getTramits('http://localhost:5000/tramits');
            this.state.actions.getTasks('http://localhost:5000/tasks');
        }
        render() {
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            )
        }
    }
    return StoreWrapper;
}
export default injectContext;