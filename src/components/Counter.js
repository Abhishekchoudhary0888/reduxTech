import React from 'react'
import PropTypes from 'prop-types';

const Counter = ({onIncrementClick, onDecrementCLick, message}) => {
	return (
			<div>
				<h1>Counter value is : {message}</h1>
				<button onClick={onIncrementClick}> Increment </button>
				<button onClick={onDecrementCLick}> Decrement </button>
			</div>
		)
}


Counter.propTypes = {
	message: PropTypes.number,
	onIncrementClick: PropTypes.func,
	onDecrementCLick: PropTypes.func
}

Counter.defaultProps = {
	message: 0,
	onIncrementClick: () => {}
}

export default Counter;