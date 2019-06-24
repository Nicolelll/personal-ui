// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Input from './components/Input'

ReactDOM.render(
    // <Flex align="space-around">
    //     <div>1</div>
    //     <div>1</div>
    // </Flex>,
    <Input />,
    document.querySelector('#root')
)

/**
 * 模块导出
 */
// const req = require.context('./components', true, /\.js|less/)

// console.log(req.keys())
// req.keys().forEach(c => {
//     req(c)
//     console.log('c', req(c))
// });
