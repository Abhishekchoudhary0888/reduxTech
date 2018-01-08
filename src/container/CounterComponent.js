
import {connect} from 'react-redux';
import Counter from './../components/Counter';
import { incrementFn, decrementFn } from './../actions';
import * as Action from './../actions';


const mapStateToProps = (state, ownProps) => {

	return {
		message: state.counterReducer.counter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		onIncrementClick: () => {
			dispatch(incrementFn())
		},
		onDecrementCLick: () => {
			dispatch(decrementFn())
		}
	}
}

const CounterComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);


export default CounterComponent;




