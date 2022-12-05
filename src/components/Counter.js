import React, { useReducer } from 'react'
const initialState = { count: 0 }

// reducer方法
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

// 计数器组件
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>自增</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>自减</button>
    </>
  )
}

export default Counter
