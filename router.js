import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Input from './components/Input'

const routerConfig = () => {
  return (
    <Router>
      <Route exact path='/' component={Input} />
    </Router>
  )
}

export default routerConfig