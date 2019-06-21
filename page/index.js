import React from 'react';
import { NavLink } from 'react-router-dom'
class Index extends React.Component{
  render() {
    return (
      <div>index
        <NavLink to='/input'>to input</NavLink>
      </div>
    )
  }
}

export default Index