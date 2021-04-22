import React from 'react'
import {useDispatch } from 'react-redux'
import { complete_todo, delete_todo } from '../store/actions/types'

const TodoItem = ({id, todo }) => {
  const dispatch = useDispatch()
  function completeTodo(e) {
    dispatch(complete_todo(id))
    e.target.parentNode.parentNode.parentNode.classList.toggle(
      'animate__flipInX'
    )
  }
  return (
    <li
      style={{ background: todo.complete ? 'red' : 'rgba(73, 231, 215,.4)'}}
      className="list-group-item mb-2 animate__animated"
    >
      <div className="form-switch sp-bt">
        <span>
          <input
            onChange={(event) => completeTodo(event)}
            className=" form-check-input mt-2"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked={todo.complete}
            style={{cursor: 'pointer'}}
          />
          &nbsp;
          <strong className="strong">{id+1} &nbsp;{todo.text}</strong>
        </span>
        <button
          onClick={() => dispatch(delete_todo(id))}
          className="btn btn-warning br-50 rounded justify-content-end"
        >
          &times;
        </button>
      </div>
    </li>
  )
}
export default TodoItem