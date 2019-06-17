import React, { useState, useEffect } from 'react'

function Example (props) {
    const [name, setName] = useState('lily')
    const [count, setCount] = useState(-1)
    
    return (
        <div>
            <div>name: {name}</div>
            <button onClick={() => setName(props.name)}>按钮</button>
            <div>count: {count}</div>
            <button onClick={() => setCount(count+1)}>点击+1</button>
        </div>
    )
}
export default Example