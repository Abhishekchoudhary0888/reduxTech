import React from 'react';
import ReactDOM from 'react-dom';

import Root from './container/Root';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducer'

const storek = createStore(
appReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


let store = createStore(appReducer);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
