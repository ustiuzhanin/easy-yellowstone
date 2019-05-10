import React from 'react';

import styles from './Tour.module.css'

function tour(props) {
  return (
    <article className={styles.tour}>
      <img className={styles.img} src={props.url} alt={props.title} />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.text}>{props.text}</p>
      </div>
    </article>
  )
}

export default tour
