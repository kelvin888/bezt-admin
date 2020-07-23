import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import { Provider } from 'react-redux'
import { loadState, saveState } from './LocalStorage';
import App from './components';
import './assets/sass/main.scss';

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => {
    saveState(store.getState());
})

// console.log('store')
// console.log(store)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
