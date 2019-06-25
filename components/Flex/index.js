import React from 'react';
import classname from 'classname'
import './index.less'

/**
 * 
 * @param {align} props 
 * @param {justify} props 
 * @param {wrap} props 
 */
const Flex = (props) => {
  const defaultProps = {
    prefix: 'flex-styles',
  }
  const {
    align,
    justify,
    wrap,
  } = props
  const styles = classname(defaultProps.prefix, {
    [`${defaultProps.prefix}-j-around`]: justify === 'around',
    [`${defaultProps.prefix}-j-between`]: justify === 'between',
    [`${defaultProps.prefix}-j-start`]: justify === 'start',
    [`${defaultProps.prefix}-j-end`]: justify === 'end',
    [`${defaultProps.prefix}-j-center`]: justify === 'center',
    [`${defaultProps.prefix}-j-evenly`]: justify === 'evenly',
    [`${defaultProps.prefix}-a-start`]: align === 'start',
    [`${defaultProps.prefix}-a-end`]: align === 'end',
    [`${defaultProps.prefix}-a-center`]: align === 'center',
    [`${defaultProps.prefix}-a-center`]: align === 'center',
    [`${defaultProps.prefix}-wrap`]: wrap === 'wrap',
    [`${defaultProps.prefix}-nowrap`]: wrap === 'nowrap',
  })

  return (
    <div className={styles}>
      {props.children}
    </div>
  )
}

export default Flex