import Header from '../components/Header';
import {connect} from 'react-redux';
import * as Actions from './../actions';

const mapStateToProps = (state, onwProps) => {
	return  {
		input: state.headerReducer.inputVal
	}
}	

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onChange: (val) => {
			dispatch(Actions.inputValueUpdate(val));
		},
		onClick : (val) => {
			dispatch(Actions.addTodo(val));
		}
	}
}

const AppHeader = connect(
			mapStateToProps, 
			mapDispatchToProps
		)(Header);

export default AppHeader;


