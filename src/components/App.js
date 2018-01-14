import React, { Component } from 'react';

import Header from './Header';
import TodoBar from './TodoBar';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (

    	<div>
	    	<Header />
	    	{ this.props.children }
    	</div>
    );
  }
}

export default App;
