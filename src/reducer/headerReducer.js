import { inputValueUpdate } from '../actions/index';
import store from '../store';

const initialState = store;

const headerReducer = (state = initialState, action) => {
	switch(action.type){
		case inputValueUpdate().type :
			return Object.assign({},state, {
				inputVal: action.inputVal
			})
		default:
			return state	
	}
}	

export default headerReducer;

