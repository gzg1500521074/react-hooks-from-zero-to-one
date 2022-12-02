import './App.css'
import React from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Counter1 />
        <br />
        <Counter2 />
      </div>
    )
  }
}

export default App
