// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
// import Input from './components/Input'
import RouterConfig from './router'
import Store from './controller/index'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={Store}>
        <RouterConfig />
    </Provider>,
    // <Input 
    //     type='phone'
    //     onError={() => console.log('this is not a phone number')}
    // />,
    document.querySelector('#root')
)
