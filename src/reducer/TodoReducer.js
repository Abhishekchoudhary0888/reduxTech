import {ADD_TODO , DELETE_TODO} from './../actions';

const TodoReducer = (state = {tasks: []}, action) => {

	switch(action.type) {
		case ADD_TODO:
			console.log('Add todo reducer');
			return Object.assign({}, state, { 
				tasks:	[
							...state.tasks,
							{
								text: action.payload
							} 
						]
			});

		case DELETE_TODO:
			console.log('Delete todo reducer');
			break;
		default: 
			return state		
	}

}

export default TodoReducer;

