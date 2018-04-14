import { combineReducers } from 'redux'
import matches from './matches'
import points from './points'
 
export default combineReducers({
  matches,
  points,
})
