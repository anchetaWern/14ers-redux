import { combineReducers } from 'redux';
import search from './searchReducer';
import currentSelections from './currentSelectionsReducer';

export default combineReducers({
  search,
  currentSelections
});