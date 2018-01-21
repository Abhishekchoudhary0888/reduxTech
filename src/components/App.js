import React, { Component } from 'react';
import HeaderContainer from './../container/HeaderContainer';
import TodoContainer from './../container/TodoContainer';

class App extends Component {
  render() {
    return (
    	<div>
    		<HeaderContainer />
    		<TodoContainer />
    	</div>
    )
  }
}

export default App;
