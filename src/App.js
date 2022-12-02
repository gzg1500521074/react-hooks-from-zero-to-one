import './App.css'
import React, { useState } from 'react'
import Counter from './components/Counter'
import Son from './components/Son'

function App() {
  const [name, setName] = useState('张三')
  return (
    <div className="App">
      <h2>案例1</h2>
      <Counter />
      <hr />
      <h2>案例2</h2>
      <Son name={name} setName={setName} />
      <hr />
    </div>
  )
}

export default App
