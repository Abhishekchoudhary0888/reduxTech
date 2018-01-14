import {connect} from 'react-redux';
import TodoList from './../components/TodoList'

const mapStateToProps = (state) => {
	return{
		task : state.TodoReducer.tasks
	}
}

const TodoTaskList = connect(mapStateToProps)(TodoList)

export default TodoTaskList;