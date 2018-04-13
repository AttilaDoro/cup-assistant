import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import matches from './matches'
 
export default combineReducers({
  todos,
  visibilityFilter,
  matches,
})