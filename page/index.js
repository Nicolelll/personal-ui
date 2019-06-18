import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import IndexAction from '../controller/test/actions'
import { Button } from 'antd'

// const Index = () => {
//   return (
//     <div>
//       <header>
//         this is Header
//       </header>
//       <NavLink to='/input'>to Input </NavLink>
//     </div>
//   )
// }
class Index extends React.PureComponent {
  plusOne = () => {
    const { renderData } = this.props
    const { count } = this.props.indexData
    renderData({
      count: count + 1
    })
  }
  render() {
    const { count } = this.props.indexData
    return (
      <div>
        <header>
          this is Header
        </header>
        <div>count: {count}</div>
        <div>
          <Button onClick={this.plusOne.bind(this)}>点击+1</Button>
        </div>
        <NavLink to='/input'>to Input </NavLink>
      </div>
    )
  }
}
export default connect((store) => {
  return { indexData: store.RenderData }
}, {
  renderData: IndexAction.RenderData
})(Index)