import * as Action from './../actions';
import {combineReducers} from 'redux';
import store from './../store';

const counterReducer = ( state= store.counterReducer, action) => {

	switch(action.type){
		case Action.INCREMENT:
			console.log('increment counter');
			return Object.assign({}, state, {counter: state.counter+1});
		case Action.DECREMENT:
			console.log('decrement counter');
			return Object.assign({}, state, {counter: state.counter-1});
		default: 
			return state		
	}
}


var counterReducers = combineReducers({
	counterReducer
});

export default counterReducers;
