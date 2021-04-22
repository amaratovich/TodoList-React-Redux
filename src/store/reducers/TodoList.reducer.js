import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/types'
import counter  from './counter.reducer'
const initialState = JSON.parse(localStorage.getItem('todos'))

const todo_list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.payload, complete: false}]
    case COMPLETE_TODO:
      return state.map((todo, id) => {
         return id == action.payload 
         ? { ...todo, complete: !todo.complete }
         : todo
      })
    case DELETE_TODO:
      return state.filter((el, id) => id !== action.payload)
    default:
      return state
  }
}
export default combineReducers({
  counter,
  todo_list
})
