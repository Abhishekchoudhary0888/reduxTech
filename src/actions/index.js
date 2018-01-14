
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = (task)=>{
	return{
		type: 'ADD_TODO',
		payload: task
	}
}

export const deleteTodo = (taskId) =>{
	return {
		type: 'DELETE_TODO',
		payload: taskId
	}
}

