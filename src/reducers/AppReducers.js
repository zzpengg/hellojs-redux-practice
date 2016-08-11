import { combineReducers } from 'redux';
import { todos } from 'reducers/TodoReducers';

const AppReducers = combineReducers({
  todos
})

export default AppReducers;
