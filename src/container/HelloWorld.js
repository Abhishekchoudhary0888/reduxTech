import Hello from './../components/Hello';
import { connect } from 'react-redux';
import { HELLO_WORLD } from './../actions';

const mapStateToProps = (state, onwProps) => {
	return {
		message: state.helloWorld.message
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		onClick: ()=>{
				dispatch({ type: HELLO_WORLD})
			}
	}
}

const HelloWorld = connect (
		mapStateToProps,
		mapDispatchToProps
	)(Hello);

export default HelloWorld;



