import React from 'react'

// 函数组件实现计数器案例
const Counter = () => {
  const [count, setCount] = React.useState(0)
  const addcount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={addcount}>累加</button>
    </>
  )
}
export default Counter
