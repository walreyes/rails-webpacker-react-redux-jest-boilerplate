import Hello from '../hello_react'
import React from 'react'
import ReactDOM from 'react-dom'

const node = document.getElementById('hello-react')
const data = JSON.parse(node.getAttribute('data'))

ReactDOM.render(<Hello {...data} />, node)
