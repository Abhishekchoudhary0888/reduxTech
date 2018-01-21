import React from 'react';

const TodoList = (props) => {
	return (
			<li id={props.id}>{props.text}</li>
		)
}

export default TodoList;