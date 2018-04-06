import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
 
export default combineReducers({
  todos,
  visibilityFilter
})