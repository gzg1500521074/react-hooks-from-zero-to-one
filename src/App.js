import './App.css'
import React, { useState } from 'react'
import Counter from './components/Counter'
import Son1 from './components/Son1'
import Son2 from './components/Son2'
import Son3 from './components/Son3'

function App() {
  const [name, setName] = useState('张三')
  return (
    <div className="App">
      <h2>案例1</h2>
      <Counter />
      <hr />
      <h2>案例2</h2>
      <Son1 name={name} setName={setName} />
      <hr />
      <h2>案例3</h2>
      <Son2 />
      <hr />
      <h2>案例4</h2>
      <Son3 />
      <hr />
    </div>
  )
}

export default App
