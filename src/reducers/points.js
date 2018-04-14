import { UPDATE_POINTS_FOR_KILL_VALUE } from '../actions'
  
  const initialState = {
      pointForKill: 0,
      pointsForPositions: [],
  }
  
  const points = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_POINTS_FOR_KILL_VALUE:
        return { ...state, pointForKill: action.killValue }
      default:
        return state
    }
  }
  
  export default points
  