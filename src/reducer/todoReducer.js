import { addTodo } from '../actions';
import store from '../store';

const initialState = store.todoState;

const todoReducer = (state = initialState, action) => {

	switch(action.type){
		case addTodo().type :
			return Object.assign({}, state, {
				todo: [ 
						{...state.todo},
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
