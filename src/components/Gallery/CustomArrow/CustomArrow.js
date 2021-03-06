import React from 'react';

import styles from './CustomArrow.module.css'

function customArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.arrow].join(' ')}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

export default customArrow
