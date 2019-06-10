import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Input from './components/Input'

ReactDOM.render(
    // <div>hello hhh</div>,
    <Input 
        type='phone'
        onError={() => console.log('this is not a phone number')}
    />,
    document.querySelector('#root')
)
