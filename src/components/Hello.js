
import React, {PropsTypes} from 'react';


const Hello = ({onClick, message}) => {
	return (
			<div>
				<h1>{message}</h1>
				<button onClick={onClick}>Click</button>
			</div>
		)
}

// Hello.propTypes= {
// 	message: PropTypes.string.isRequired,
// 	onClick: PropTypes.function.isRequired
// };

export default Hello;




