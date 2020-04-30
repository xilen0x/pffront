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
            this.state.actions.getBlogs('http://localhost:5000/blog');
            this.state.actions.getTemperatura('https://api.weatherapi.com/v1/forecast.json?key=54156a98efc540caac4202000202404&q=chile&days=3');
            this.state.actions.getComentary('http://localhost:5000/coment');
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