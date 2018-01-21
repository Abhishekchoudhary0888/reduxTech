import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import headerReducer from './headerReducer';


const appReducer = combineReducers({
	todoReducer,
	headerReducer
})

export default appReducer;