import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import sampleUserReducer from './sampleUserReducer'

export default combineReducers({
    todos: todoReducer,
    user: sampleUserReducer
});