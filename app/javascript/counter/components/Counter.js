import React from 'react'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {
  static propTypes = {
    counter     : PropTypes.number.isRequired,
    doubleAsync : PropTypes.func.isRequired,
    increment   : PropTypes.func.isRequired
  }

  render () {
    const counter = this.props.counter
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {counter}</h2>
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
}
