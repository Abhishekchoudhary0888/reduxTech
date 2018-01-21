import React from 'react';
import TodoList from './TodoList';


const Todo = ({task}) => {
	return (
		<ul>
			{
				task && task.map((todo, index) => {
					return <TodoList text={todo.text} id={todo.id} /> 
				}) 
			}
			
		</ul>
		)
}

export default Todo;

