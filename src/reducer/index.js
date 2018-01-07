import {combineReducers} from 'redux';
import {HELLO_WORLD} from './../actions';


const helloWorld = ( state =  {message: 'hello'}, action) => {


	switch(action.type){
		case HELLO_WORLD :
			console.log('reducer hellowolrld');
			return Object.assign({}, state, {message: 'Hello world'})
		default:
			return state
	}

}

const helloReducer = combineReducers({helloWorld});
export default helloReducer;