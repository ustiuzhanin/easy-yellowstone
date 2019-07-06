import React from 'react';

import styles from './Review.module.css';

function review(props) {
  return (
    <div className={styles.review}>
      <img className={styles.img} src={props.img} alt=""/>
      <h3 className={styles.title}>{props.name}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default review
