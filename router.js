import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Index from './page/index'
import Input from './components/Input'

const RouterConfig = () => {
  return (
    <Router>
      <Route exact path='/' component={Index} />
      <Route path='/input' component={Input} />
    </Router>
  )
}
export default RouterConfig