import React from 'react';

const TodoList = ({task, deleteTask}) =>{
	return (
		<div> List is: 
			{
				task && task.map( (todo) => {
					return <div><p>{todo.text} </p> <button onClick={deleteTask}> Delete </button></div>
				})
			}
		</div>
		)
}

export default TodoList;