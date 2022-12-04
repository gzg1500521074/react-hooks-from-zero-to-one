import React, { useContext } from 'react'
import { AppContext } from '../utils/context'

// 孙子组件
const Grandson = (props) => {
  const { address } = useContext(AppContext)

  return (
    <>
      <p>{address}</p>
    </>
  )
}
export default Grandson
