export const ADD_NEW_MATCH = 'matches/ADD_NEW_MATCH'
export const addNewMatch = () => ({
  type: ADD_NEW_MATCH,
})

export const REMOVE_MATCH_ROW = 'matches/REMOVE_MATCH_ROW'
export const removeMatchRow = matchIndex => ({
  type: REMOVE_MATCH_ROW,
  matchIndex,
})
