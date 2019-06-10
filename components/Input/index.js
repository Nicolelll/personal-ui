import React from 'react'
import './index.less'

class Input extends React.Component {
    state = {
        error: true,
        types: new Map([
            ['phone', /^1+\d{10}$/]
        ]),
        message: 'ERROR！'
    }
    componentDidMount() {
        if (!this.state.types.get(this.props.type)) {
            this.setState({
                error: false
            })
        }
    }
    handleChange(regex) {
        if (regex) {
            this.setState({
                error: regex.test(event.target.value) ? false : true
            })
        }
    }
    render() {
        const { type, message } = this.props
        const { types, error } = this.state 
        return (
            <div>
                <input 
                    className={error ? 'baseInput error' : 'baseInput'}
                    onChange={this.handleChange.bind(this, types.get(type))}
                    type={type}
                />
                {error && <span className={'text'}>
                    {message || this.state.message}
                </span>}
            </div>
        )
    }
}

// Input.propTypes = {
//     type: PropTypes.string,
//     onError: propTypes.function,
// }

export default Input