
let idCounter = 0;

export function inputValueUpdate (val) {
	return {
		type: 'INPUT_UPDATED',
		inputVal: val
	}
}

export function addTodo (text) {
	return {
		type: 'ADD_TODO',
		id: idCounter++,
		text
	}
}


export function deleteTodo (id) {
	return {
		type: 'DELETE_TODO',
		id
	}
}

export function visibilityFilter (filter) {
	return {
		type: 'VISIBILITY_FILTER',
		filter
	}
}
