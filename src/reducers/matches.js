import {
  ADD_NEW_MATCH,
} from '../actions'

const initialState = [
  {
    matchId: 0,
  },
]

const matches = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MATCH:
      return [
        ...state,
        {
          matchId: action.matchId,
        }
      ]
    default:
      return state
  }
}

export default matches
