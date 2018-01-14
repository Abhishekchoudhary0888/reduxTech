import TodoBar from './../components/TodoBar';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './../actions';


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (task) => {
			dispatch(addTodo(task));	
		}
	}
}

const TodoTaskBar = connect(
		() => { return {} },
		mapDispatchToProps
	)(TodoBar);

export default TodoTaskBar;
