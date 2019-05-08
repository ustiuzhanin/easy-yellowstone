import React from 'react';

import styles from './Feature.module.css';

function feature(props) {
  return (
    <article className={styles.feature}>
      <img src={props.url} alt={props.title} />
      <p>{props.text}</p>
    </article>
  )
}

export default feature
