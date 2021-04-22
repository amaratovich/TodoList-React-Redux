import React from 'react'
import { connect } from 'react-redux'
import { add_count, sub_count } from '../../store/actions/types.counter'

const Counter = ({state, add_count, sub_count}) => {
  return (
    <div className="card">
      <div className="card-body">
          <h1 className='card-title'> Couner-Redux</h1>
        <button onClick={add_count} className='btn btn-primary'>+</button><strong>{state}</strong><button className='btn btn-primary' onClick={sub_count}>-</button>
      </div>
    </div>
  )
}
const mapStatetoProps = state => ({
    state: state.counter
})

const mapDispatchToProps = dispatch => ({
    add_count: () => dispatch(add_count()), 
    sub_count: () => dispatch(sub_count())    
})

export default connect(mapStatetoProps, mapDispatchToProps)(Counter)