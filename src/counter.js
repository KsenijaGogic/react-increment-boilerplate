import React from 'react'
import { connect } from 'react-redux'
import { increment } from './actions'

const Counter = (props) => {
  return (
    <div>
      <span>{props.counter}</span>
      <button type="button" onClick={props.increment}>Count</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const counter = state.counter
  return {
    counter
  }
}

export default connect(mapStateToProps, { increment })(Counter)
 