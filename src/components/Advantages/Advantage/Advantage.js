import React from 'react';

import styles from './Advantage.module.css';

function advantage(props) {
  return (
    <article className={styles.advantage}>
      <img className={styles.img} src={props.url} alt={props.title} />
      <p>{props.text}</p>
    </article>
  )
}

export default advantage
