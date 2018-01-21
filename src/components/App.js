import React, { Component } from 'react';
import HeaderContainer from './../container/HeaderContainer';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
    	<div>
    		<HeaderContainer />
    		<Todo />
    	</div>
    )
  }
}

export default App;
