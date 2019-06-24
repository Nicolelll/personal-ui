// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Flex from './components/Flex'

ReactDOM.render(
    <Flex justify='between' wrap='wrap'>
        <Flex>
            <div>1</div>
            <div>2</div>
        </Flex>
    </Flex>,
    // <Input />,
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
