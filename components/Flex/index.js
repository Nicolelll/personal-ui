import React from 'react';
// import styles from './index.less'

const Flex = (props) => {
  const styles = {
    display: 'flex',
    alignItems: props.align,
  }
  return (
    <div className={styles}>
      {props.children}
    </div>
  )
}

export default Flex