import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import currentSelections from './currentSelectionsReducer';

export default combineReducers({
  searchReducer,
  currentSelections
});