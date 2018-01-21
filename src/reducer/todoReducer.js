import { addTodo } from '../actions';
import store from '../store';

const initialState = store;

const todoReducer = (state = initialState, action) => {

	switch(action.type){
		case addTodo().type :
			return Object.assign({},state, {
				todoState: [ 
						...state.todoState,
						{
							id: action.id,
							text: action.text,
							completed: false
						}
				]
			})
		default: 
			return state;	
	}
}

export default todoReducer;
