import React from 'react'
class Input extends React.Component {
    handleChange = async(e) => {
        await console.log(e)

    }
    render() {
        return (
            <input onChange={this.handleChange} />
        )
    }
}
export default Input