import React from 'react'

// 每次渲染都是独立的闭包
const Son2 = () => {
  const [age, setAge] = React.useState(30)
  const ageRef = React.useRef(age)

  // 增加年龄:  setAge(age + 1) 只能访问到点击 “显示Age” 那一刻的值，后续累加的年龄是获取不到的，除非借助于 useRef 这个hook
  const addAge = () => {
    setAge(age + 1)
    ageRef.current = ageRef.current + 1
  }

  // 显示age
  const showAge = () => {
    setTimeout(() => {
      setAge(age)
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
export default Son2
