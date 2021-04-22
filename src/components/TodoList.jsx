import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo } from '../store/actions/types'
import TodoItem from './TodoItem'

const TodoList = () => {
  const state = useSelector((state) => state.todo_list)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {inputValue.trim() && (
          <span
            className="input-group-text btn btn-primary"
            id="basic-addon2"
            onClick={() => {
              dispatch(add_todo(inputValue))
              setInputValue('')
            }}
          >
            add
          </span>
        )}
      </div>
      <ul className="list-group">
        {state.map((todo, id) => (
          <TodoItem todo={todo} id={id} key={id} />
        ))}
      </ul>
    </>
  )
}
export default TodoList
