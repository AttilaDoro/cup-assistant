
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
 
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
 
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_NEW_MATCH = 'matches/ADD_NEW_MATCH'
export const addNewMatch = () => ({
  type: ADD_NEW_MATCH,
})

export const REMOVE_MATCH_ROW = 'matches/REMOVE_MATCH_ROW'
export const removeMatchRow = matchIndex => ({
  type: REMOVE_MATCH_ROW,
  matchIndex,
})
