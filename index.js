// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Input from './components/Input'
import Test from './components/Test'

ReactDOM.render(
    <Test name='winter' />,
    // <Input 
    //     type='phone'
    //     onError={() => console.log('this is not a phone number')}
    // />,
    document.querySelector('#root')
)
