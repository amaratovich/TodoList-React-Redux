export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export const add_todo = (text) => ({
    type: ADD_TODO,
    payload: text
})
export const complete_todo = (id) => ({
    type: COMPLETE_TODO,
    payload: id
})
export const delete_todo = (id) => ({
    type: DELETE_TODO,
    payload: id
})