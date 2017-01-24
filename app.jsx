import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Transport} from './index.jsx'

export class App extends Component {
  render () {
    return (
      <div style={{margin: 40, border: '2px solid black', backgroundColor: 'gray'}}>
        <Transport>
          <div>I'm somewhere else</div>
        </Transport>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('example'))
