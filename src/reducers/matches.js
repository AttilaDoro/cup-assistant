import {
  ADD_NEW_MATCH,
  REMOVE_MATCH_ROW,
} from '../actions'

const initialState = [
  {
    matchId: null,
  },
]

const matches = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MATCH:
      return [
        ...state,
        {
          matchId: null,
        }
      ]
    case REMOVE_MATCH_ROW:
      return state.filter((match, index) => index !== action.matchIndex)
    default:
      return state
  }
}

export default matches
