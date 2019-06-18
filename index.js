import React from 'react'
import ReactDOM from 'react-dom'
import Input from './components/Input'
import dva from 'dva'
import Index from './router'

const app = dva()
// 设置路由
app.router(() => <Index />)

// app.model();

app.start('#root')

// ReactDOM.render(
//     // <div>hello hhh</div>,
//     <Input />,
//     document.querySelector('#root')
// )
