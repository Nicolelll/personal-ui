import React from 'react'
import styles from './index.less'
class Input extends React.Component {
    state = {
        error: true,
        types: new Map([
            ['phone', /^1+\d{10}$/],
        ]),
        message: 'ERROR！'
    }
    static getDerivedStateFromProps(nextProps, preState) {
        // 是否需要进行错误判断（是否是自定义type类）
        if (!preState.types.has(nextProps.type)){
            return {
                error: false
            }
        }
        return null
    }
    handleChange(regex) {
        if (regex) {
            this.setState({
                error: regex.test(event.target.value) ? false : true
            }, 
            () => this.state.error ? this.handleError() : null
            )
        }
    }
    handleError () {
        this.props.onError()
    }
    render() {
        const { type, message } = this.props
        const { types, error } = this.state 
        return (
            <div>
                <input 
                    className={error ? `${styles.error} ${styles.baseInput}` : styles.baseInput}
                    onChange={this.handleChange.bind(this, types.get(type))}
                    type={type}
                />
                {error && <span className={styles.text}>
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