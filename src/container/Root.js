import React, { Component } from 'react';
import App from '../components/App';
import TodoTaskBar from './TodoTaskBar';
import TodoTaskList from './TodoTaskList';

export default class Root extends Component {
	render () {
		return (
			<App>
				<TodoTaskBar />
				<TodoTaskList />
			</App>
			)
	}
}
