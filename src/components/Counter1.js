import React from 'react'

// 类组件实现计数器案例
class Counter1 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  addcount = () => {
    let count = this.state.count
    this.setState({
      count: (count += 1),
    })
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.addcount}>类组件 - 计数器</button>
      </>
    )
  }
}
export default Counter1
