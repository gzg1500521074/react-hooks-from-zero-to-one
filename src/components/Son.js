import React from 'react'

// 子组件：父组件将 state, setState 通过 props 传递进子组件，然后由子组件进行调用
const Son = (props) => {
  const { name, setName } = props
  const addcount = () => {
    setName('李四')
  }

  return (
    <>
      <p>{name}</p>
      <button onClick={addcount}>改变Name</button>
    </>
  )
}
export default Son
