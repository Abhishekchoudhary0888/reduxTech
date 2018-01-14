import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import todoReducer from './reducer'

// const storek = createStore(
// todoReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

let store = createStore(todoReducer);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>, document.getElementById('root'));
registerServiceWorker();



