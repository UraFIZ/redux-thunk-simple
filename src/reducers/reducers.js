import { combineReducers } from 'redux';
import postReducer from './postReducers';
import userReducer from './userReducer'
export default combineReducers({
  post: postReducer,
  users: userReducer
})