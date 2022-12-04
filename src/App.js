import './App.css'
import React from 'react'
import Son from './components/Son'
import { AppContext } from './utils/context'

function App() {
  const [adress, setAddress] = React.useState('北京')
  return (
    <AppContext.Provider value={{ address: adress }}>
      <div className="App">
        <Son />
        <button
          onClick={() => {
            setAddress('上海市')
          }}
        >
          修改地址
        </button>
      </div>
    </AppContext.Provider>
  )
}

export default App
