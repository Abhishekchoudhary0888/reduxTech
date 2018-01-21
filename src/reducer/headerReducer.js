import { inputValueUpdate } from '../actions/index';
import store from '../store';

const initialState = store.todoState;

const headerReducer = (state = initialState, action) => {
	switch(action.type){
		case inputValueUpdate().type :
			return {...state}, {
				inputVal: action.inputVal
			}
		default:
			return state	
	}
}	

export default headerReducer;

