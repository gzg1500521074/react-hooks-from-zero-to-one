import React from 'react'

// 这里setAge的参数是一个回调函数，回调函数的含义：每次计算时，先获取先前的值再进行重新计算，并返回一个更新后的值
const Son3 = () => {
  const [age, setAge] = React.useState(30)

  // 增加age
  const addAge = () => {
    setAge((age) => age + 1)
  }

  // 显示age: 3秒后，setAge会获取上次的值参与运算
  const showAge = () => {
    setTimeout(() => {
      setAge((age) => age + 1)
    }, 3000)
  }

  return (
    <>
      <p>{age} </p>
      <button onClick={addAge}>累加Age</button>
      <button onClick={showAge}>显示Age</button>
    </>
  )
}
export default Son3
