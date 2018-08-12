import React, { Component } from 'react'
import Ctrl from './Ctrl'
import FractalCanvas from './FractalCanvas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      r: 1 / 2,
      n: 3,
      iterations: 100000,
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    return (
      <div>
        <Ctrl handleChange={this.handleChange} state={this.state} />
        <FractalCanvas state={this.state} />
      </div>
    )
  }
}

export default App
