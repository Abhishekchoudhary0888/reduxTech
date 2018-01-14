import React from 'react';

class TodoBar extends React.Component {
	constructor(props){
		super(props);
	}

	_onClick () {
		this.props.onClick(this.inputTask.value);
	}

	render(){
		return(
			<div>
				<input 
					type="text" 
					ref={(input) => {this.inputTask = input}} />
				<button onClick= { this._onClick.bind(this) }> Add Task </button>
			</div>
		)
	}
	
}

export default TodoBar;