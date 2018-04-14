import {
  UPDATE_POINTS_FOR_KILL_VALUE,
  REMOVE_POINT_FOR_POSITION_ROW,
  UPDATE_POINT_FOR_POSITION_VALUE,
  ADD_NEW_POINT_FOR_POSITION_ROW,
} from '../actions'

const initialState = {
  pointForKill: 0,
  pointsForPositions: [
    {
      killValue: 0
    },
  ],
}

const points = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POINTS_FOR_KILL_VALUE:
      return { ...state, pointForKill: action.killValue }
    case REMOVE_POINT_FOR_POSITION_ROW:
      return { ...state, pointsForPositions: state.pointsForPositions.filter((pos, index) => index !== action.posIndex) }
      case UPDATE_POINT_FOR_POSITION_VALUE:
      const newPointsForPositions = [...state.pointsForPositions]
      newPointsForPositions[action.posIndex].killValue = action.killValue
      return { ...state, pointsForPositions: newPointsForPositions }
    case ADD_NEW_POINT_FOR_POSITION_ROW:
      return { ...state, pointsForPositions: [...state.pointsForPositions, { killValue: 0 }] }
    default:
      return state
  }
}

export default points
