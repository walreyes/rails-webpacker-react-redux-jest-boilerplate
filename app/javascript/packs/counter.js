import CounterApp from '../counter'
import React from 'react'
import ReactDOM from 'react-dom'

const node = document.getElementById('counter')
const data = JSON.parse(node.getAttribute('data'))

ReactDOM.render(<CounterApp {...data} />, node)
