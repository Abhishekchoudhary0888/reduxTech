import Todo from './../components/Todo.js';

import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
	return {
		task: state.todoReducer.todoState
	}
}

const AppTodo = connect (
	mapStateToProps)(Todo);

export default AppTodo;

