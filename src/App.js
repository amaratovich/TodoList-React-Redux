import { useState } from 'react'
import Counter from './components/counter'
import TodoList from './components/TodoList'

function App() {
  const [buttonSwitch, setSwitch] = useState(true)
  return (
    <div className="container p-5">
      <button className="btn btn-hover mb-2" onClick={()=> setSwitch(!buttonSwitch)}>switch</button>
      <div className="card mb-3">
        <div className="card-body">
          <h1 className="card-title">Todo-List-Redux</h1>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          {buttonSwitch ? <TodoList /> : <Counter />}
        </div>
      </div>
    </div>
  )
}

export default App
