export const ADD_NEW_MATCH = 'matches/ADD_NEW_MATCH'
export const addNewMatch = () => ({
  type: ADD_NEW_MATCH,
})

export const REMOVE_MATCH_ROW = 'matches/REMOVE_MATCH_ROW'
export const removeMatchRow = matchIndex => ({
  type: REMOVE_MATCH_ROW,
  matchIndex,
})

export const UPDATE_POINTS_FOR_KILL_VALUE = 'points/UPDATE_POINTS_FOR_KILL_VALUE'
export const updatePointsForKillValue = killValue => ({
  type: UPDATE_POINTS_FOR_KILL_VALUE,
  killValue,
})

export const REMOVE_POINT_FOR_POSITION_ROW = 'points/REMOVE_POINT_FOR_POSITION_ROW'
export const removePointForPositionRow = posIndex => ({
  type: REMOVE_POINT_FOR_POSITION_ROW,
  posIndex,
})

export const UPDATE_POINT_FOR_POSITION_VALUE = 'points/UPDATE_POINT_FOR_POSITION_VALUE'
export const updatePointForPositionValue = (posIndex, killValue) => ({
  type: UPDATE_POINT_FOR_POSITION_VALUE,
  posIndex,
  killValue,
})

export const ADD_NEW_POINT_FOR_POSITION_ROW = 'points/ADD_NEW_POINT_FOR_POSITION_ROW'
export const addNewPointForPositionRow = () => ({
  type: ADD_NEW_POINT_FOR_POSITION_ROW,
})
